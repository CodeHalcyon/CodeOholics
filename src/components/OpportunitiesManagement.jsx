import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiPlus, FiEdit2, FiTrash2, FiRefreshCw, FiArrowUp, FiArrowDown, FiMapPin, FiCalendar, FiLink } from "react-icons/fi";
import { toast } from "react-toastify";
import supabase from "../config/supabaseConfig";

const emptyOpp = { title: "", description: "", date: "", location: "", apply_link: "" };

const OpportunitiesManagement = () => {
  const [opps, setOpps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyOpp);

  const load = async () => {
    const { data, error } = await supabase
      .from("opportunities")
      .select("*")
      .order("order", { ascending: true });
    if (error) {
      console.error("Failed to fetch opportunities:", error.message);
      setOpps([]);
    } else {
      setOpps(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = () => {
    setForm(emptyOpp);
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (opp) => {
    setForm({
      title: opp.title || "",
      description: opp.description || "",
      date: opp.date || "",
      location: opp.location || "",
      apply_link: opp.apply_link || "",
    });
    setEditingId(opp.id);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyOpp);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (editingId !== null) {
      const { error } = await supabase.from("opportunities").update(form).eq("id", editingId);
      if (error) return toast.error("Save failed: " + error.message);
      toast.success("Opportunity updated");
    } else {
      const { error } = await supabase.from("opportunities").insert({ ...form, order: opps.length, is_open: true });
      if (error) return toast.error("Save failed: " + error.message);
      toast.success("Opportunity added");
    }
    closeForm();
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this opportunity?")) return;
    const { error } = await supabase.from("opportunities").delete().eq("id", id);
    if (error) return toast.error("Delete failed: " + error.message);
    toast.success("Opportunity deleted");
    load();
  };

  const handleToggleOpen = async (opp) => {
    const next = !opp.is_open;
    const { error } = await supabase.from("opportunities").update({ is_open: next }).eq("id", opp.id);
    if (error) return toast.error("Update failed: " + error.message);
    toast.success(next ? "Marked as Live" : "Marked as Closed");
    load();
  };

  const move = async (index, dir) => {
    const target = index + dir;
    if (target < 0 || target >= opps.length) return;
    const next = [...opps];
    [next[index], next[target]] = [next[target], next[index]];
    const rows = next.map((o, i) => ({ id: o.id, order: i }));
    const { error } = await supabase.from("opportunities").upsert(rows, { onConflict: "id" });
    if (error) return toast.error("Reorder failed: " + error.message);
    setOpps(next);
    toast.success("Order updated");
  };

  return (
    <div>
      {showForm && createPortal(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{editingId !== null ? "Edit Opportunity" : "Add Opportunity"}</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <input type="text" placeholder="Title" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              <textarea placeholder="Description" rows="4" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="Date (e.g. TBD / Aug 5, 2025)" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                <input type="text" placeholder="Location (e.g. Online)" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              </div>
              <input type="text" placeholder="Apply link (URL)" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={form.apply_link} onChange={(e) => setForm({ ...form, apply_link: e.target.value })} />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeForm}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">{editingId !== null ? "Save Changes" : "Add Opportunity"}</button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-900">Opportunities</h3>
        <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
          onClick={openAdd}><FiPlus className="mr-2" /> Add Opportunity</button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16 text-gray-400"><span className="mr-2 animate-spin"><FiRefreshCw /></span> Loading…</div>
      ) : opps.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-sm text-gray-400">
          No opportunities yet. Add your first one.
        </div>
      ) : (
        <div className="space-y-3">
          {opps.map((opp, i) => (
            <div key={opp.id} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <button
                    onClick={() => handleToggleOpen(opp)}
                    title={opp.is_open ? "Click to mark as Closed" : "Click to mark as Live"}
                    className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors ${
                      opp.is_open
                        ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                        : "bg-gray-50 border-gray-200 text-gray-400"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${opp.is_open ? "bg-emerald-500" : "bg-gray-300"}`} />
                    {opp.is_open ? "Live" : "Closed"}
                  </button>
                  <h4 className="text-sm font-semibold text-gray-900 truncate">{opp.title}</h4>
                </div>
                <p className="text-xs text-gray-400 line-clamp-2">{opp.description}</p>
                <div className="flex flex-wrap gap-3 mt-2 text-[11px] text-gray-400">
                  {opp.date && <span className="flex items-center gap-1"><FiCalendar size={11} /> {opp.date}</span>}
                  {opp.location && <span className="flex items-center gap-1"><FiMapPin size={11} /> {opp.location}</span>}
                  {opp.apply_link && <span className="flex items-center gap-1"><FiLink size={11} /> {opp.apply_link}</span>}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <button className={`text-gray-400 ${i === 0 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-700"}`} title="Move up"
                  disabled={i === 0} onClick={() => move(i, -1)}><FiArrowUp size={13} /></button>
                <button className={`text-gray-400 ${i === opps.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-700"}`} title="Move down"
                  disabled={i === opps.length - 1} onClick={() => move(i, 1)}><FiArrowDown size={13} /></button>
              </div>
              <button className="text-gray-400 hover:text-gray-700" title="Edit" onClick={() => openEdit(opp)}><FiEdit2 size={15} /></button>
              <button className="text-gray-400 hover:text-red-500" title="Delete" onClick={() => handleDelete(opp.id)}><FiTrash2 size={15} /></button>
            </div>
          ))}
        </div>
      )}

      {!loading && opps.length > 0 && (
        <div className="mt-4 flex justify-center">
          <button className="inline-flex items-center text-xs text-gray-400 hover:text-gray-600" onClick={load}><FiRefreshCw className="mr-1" /> Reload</button>
        </div>
      )}
    </div>
  );
};

export default OpportunitiesManagement;