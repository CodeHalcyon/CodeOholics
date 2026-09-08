import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiPlus, FiEdit2, FiTrash2, FiUpload, FiLoader, FiArrowUp, FiArrowDown, FiRefreshCw } from "react-icons/fi";
import { toast } from "react-toastify";
import supabase from "../config/supabaseConfig";
import getCoreTeam from "../Helper/coreTeam";
import uploadToBlob, { teamImageFolder } from "../Helper/uploadToBlob";

const emptyMember = { name: "", role: "", desc: "", src: "", linkedin: "", github: "" };

const TeamManagement = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyMember);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    const data = await getCoreTeam();
    setTeam(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = () => {
    setForm(emptyMember);
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (member) => {
    setForm({
      name: member.name || "",
      role: member.role || "",
      desc: member.desc || "",
      src: member.src || "",
      linkedin: member.linkedin || "",
      github: member.github || "",
    });
    setEditingId(member.id);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyMember);
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadToBlob(file, teamImageFolder());
      setForm((f) => ({ ...f, src: url }));
      toast.success("Image uploaded to " + teamImageFolder());
    } catch (err) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim()) {
      toast.error("Name and role are required");
      return;
    }
    if (!form.src.trim()) {
      toast.error("Upload or paste a photo URL");
      return;
    }

    if (editingId !== null) {
      const { error } = await supabase.from("core_team").update(form).eq("id", editingId);
      if (error) return toast.error("Save failed: " + error.message);
      toast.success("Member updated");
    } else {
      const { error } = await supabase.from("core_team").insert({ ...form, order: team.length });
      if (error) return toast.error("Save failed: " + error.message);
      toast.success("Member added");
    }
    closeForm();
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Remove this member from the team?")) return;
    const { error } = await supabase.from("core_team").delete().eq("id", id);
    if (error) return toast.error("Delete failed: " + error.message);
    toast.success("Member removed");
    load();
  };

  const move = async (index, dir) => {
    const target = index + dir;
    if (target < 0 || target >= team.length) return;
    const next = [...team];
    [next[index], next[target]] = [next[target], next[index]];
    const rows = next.map((m, i) => ({ id: m.id, order: i }));
    const { error } = await supabase.from("core_team").upsert(rows, { onConflict: "id" });
    if (error) return toast.error("Reorder failed: " + error.message);
    setTeam(next);
    toast.success("Order updated");
  };

  const previewName = form.name.trim() || "Member";

  return (
    <div>
      {showForm && createPortal(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{editingId !== null ? "Edit Member" : "Add Team Member"}</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="Name" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <input type="text" placeholder="Role (e.g. President)" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required />
              </div>
              <textarea placeholder="Short description" rows="2" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} />
              <div>
                <label className="flex items-center justify-between gap-3 px-3 py-2 border border-dashed border-gray-300 rounded-lg cursor-pointer text-sm text-gray-500 hover:bg-gray-50">
                  <span className="flex items-center gap-2">
                    {uploading ? <FiLoader className="animate-spin" /> : <FiUpload />}
                    Upload member photo
                  </span>
                  <span className="text-xs text-gray-400">core_team/&lt;year&gt;/</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
                </label>
                <p className="text-[11px] text-gray-400 mt-1">Stored under: <span className="text-gray-600">core_team/{new Date().getFullYear()}/</span></p>
              </div>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="…or paste a photo URL" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={form.src} onChange={(e) => setForm({ ...form, src: e.target.value })} />
                {form.src && <img src={form.src} alt={previewName} className="w-12 h-12 rounded-full object-cover border border-gray-100" />}
              </div>
              <input type="text" placeholder="LinkedIn URL" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
              <input type="text" placeholder="GitHub URL" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={form.github} onChange={(e) => setForm({ ...form, github: e.target.value })} />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeForm}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">{editingId !== null ? "Save Changes" : "Add Member"}</button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-900">Core Team</h3>
        <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
          onClick={openAdd}><FiPlus className="mr-2" /> Add Member</button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16 text-gray-400"><FiLoader className="animate-spin mr-2" /> Loading…</div>
      ) : team.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-sm text-gray-400">
          No team members yet. Add your first member.
        </div>
      ) : (
        <div className="space-y-3">
          {team.map((member, i) => (
            <div key={member.id} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <img src={member.src} alt={member.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100 shrink-0" />
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-gray-900">{member.name}</h4>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
              <div className="flex flex-col gap-1">
                <button className={`text-gray-400 ${i === 0 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-700"}`} title="Move up"
                  disabled={i === 0} onClick={() => move(i, -1)}><FiArrowUp size={13} /></button>
                <button className={`text-gray-400 ${i === team.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-700"}`} title="Move down"
                  disabled={i === team.length - 1} onClick={() => move(i, 1)}><FiArrowDown size={13} /></button>
              </div>
              <button className="text-gray-400 hover:text-gray-700" title="Edit" onClick={() => openEdit(member)}><FiEdit2 size={15} /></button>
              <button className="text-gray-400 hover:text-red-500" title="Delete" onClick={() => handleDelete(member.id)}><FiTrash2 size={15} /></button>
            </div>
          ))}
        </div>
      )}

      {!loading && team.length > 0 && (
        <div className="mt-4 flex justify-center">
          <button className="inline-flex items-center text-xs text-gray-400 hover:text-gray-600" onClick={load}><FiRefreshCw className="mr-1" /> Reload</button>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;