import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiPlus, FiEdit2, FiTrash2, FiRefreshCw, FiArrowUp, FiArrowDown, FiLink, FiVideo, FiFileText } from "react-icons/fi";
import { toast } from "react-toastify";
import supabase from "../config/supabaseConfig";

const emptyResource = { title: "", type: "youtube", url: "", note: "" };

const ResourceManagement = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyResource);

  const load = async () => {
    const { data, error } = await supabase
      .from("resources")
      .select("*")
      .order("order", { ascending: true });
    if (error) {
      console.error("Failed to fetch resources:", error.message);
      setResources([]);
    } else {
      setResources(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = () => {
    setForm(emptyResource);
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (resource) => {
    setForm({
      title: resource.title || "",
      type: resource.type || "youtube",
      url: resource.url || "",
      note: resource.note || "",
    });
    setEditingId(resource.id);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyResource);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!form.url.trim()) {
      toast.error("URL is required");
      return;
    }

    if (editingId !== null) {
      const { error } = await supabase.from("resources").update(form).eq("id", editingId);
      if (error) return toast.error("Save failed: " + error.message);
      toast.success("Resource updated");
    } else {
      const { error } = await supabase.from("resources").insert({ ...form, order: resources.length });
      if (error) return toast.error("Save failed: " + error.message);
      toast.success("Resource added");
    }
    closeForm();
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this resource?")) return;
    const { error } = await supabase.from("resources").delete().eq("id", id);
    if (error) return toast.error("Delete failed: " + error.message);
    toast.success("Resource deleted");
    load();
  };

  const move = async (index, dir) => {
    const target = index + dir;
    if (target < 0 || target >= resources.length) return;
    const next = [...resources];
    [next[index], next[target]] = [next[target], next[index]];
    const rows = next.map((r, i) => ({ id: r.id, order: i }));
    const { error } = await supabase.from("resources").upsert(rows, { onConflict: "id" });
    if (error) return toast.error("Reorder failed: " + error.message);
    setResources(next);
    toast.success("Order updated");
  };

  return (
    <div>
      {showForm && createPortal(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{editingId !== null ? "Edit Resource" : "Add Resource"}</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <input type="text" placeholder="Title" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {["youtube", "article"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, type })}
                      className={`flex items-center justify-center gap-2 px-3 py-2 border rounded-lg text-sm font-medium capitalize transition-colors ${
                        form.type === type
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-200 text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      {type === "youtube" ? <FiVideo /> : <FiFileText />}
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <input type="text" placeholder="URL (YouTube video/playlist or article link)" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} required />
              <input type="text" placeholder="Note (optional)" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeForm}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">{editingId !== null ? "Save Changes" : "Add Resource"}</button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resources</h3>
        <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
          onClick={openAdd}><FiPlus className="mr-2" /> Add Resource</button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16 text-gray-400"><span className="mr-2 animate-spin"><FiRefreshCw /></span> Loading…</div>
      ) : resources.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-sm text-gray-400">
          No resources yet. Add your first one.
        </div>
      ) : (
        <div className="space-y-3">
          {resources.map((resource, i) => (
            <div key={resource.id} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold uppercase ${
                    resource.type === "youtube" ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"
                  }`}>
                    {resource.type === "youtube" ? <FiVideo size={10} /> : <FiFileText size={10} />}
                    {resource.type}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-900 truncate">{resource.title}</h4>
                </div>
                <p className="text-xs text-gray-400 truncate flex items-center gap-1"><FiLink size={11} /> {resource.url}</p>
                {resource.note && <p className="text-[11px] text-gray-400 mt-1 italic">"{resource.note}"</p>}
              </div>
              <div className="flex flex-col gap-1">
                <button className={`text-gray-400 ${i === 0 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-700"}`} title="Move up"
                  disabled={i === 0} onClick={() => move(i, -1)}><FiArrowUp size={13} /></button>
                <button className={`text-gray-400 ${i === resources.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-700"}`} title="Move down"
                  disabled={i === resources.length - 1} onClick={() => move(i, 1)}><FiArrowDown size={13} /></button>
              </div>
              <button className="text-gray-400 hover:text-gray-700" title="Edit" onClick={() => openEdit(resource)}><FiEdit2 size={15} /></button>
              <button className="text-gray-400 hover:text-red-500" title="Delete" onClick={() => handleDelete(resource.id)}><FiTrash2 size={15} /></button>
            </div>
          ))}
        </div>
      )}

      {!loading && resources.length > 0 && (
        <div className="mt-4 flex justify-center">
          <button className="inline-flex items-center text-xs text-gray-400 hover:text-gray-600" onClick={load}><FiRefreshCw className="mr-1" /> Reload</button>
        </div>
      )}
    </div>
  );
};

export default ResourceManagement;