import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiPlus, FiEdit2, FiTrash2, FiUpload, FiLoader, FiMapPin, FiCalendar, FiRefreshCw, FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import supabase from "../config/supabaseConfig";
import getEvents from "../Helper/getEvents";
import uploadToBlob, { eventImageFolder } from "../Helper/uploadToBlob";

const emptyEvent = { title: "", date: "", venue: "", description: "", img: "" };
const dateLabel = (date) => {
  const opts = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date + "T00:00:00").toLocaleDateString("en-IN", opts);
};

const EventsManagement = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyEvent);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    const data = await getEvents();
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const openAdd = () => {
    setForm(emptyEvent);
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (event) => {
    setForm({
      title: event.title || "",
      date: event.date || "",
      venue: event.venue || "",
      description: event.description || "",
      img: event.img || "",
    });
    setEditingId(event.id);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyEvent);
  };

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!form.title.trim()) {
      toast.error("Enter a title first so the image folder can be named");
      return;
    }
    setUploading(true);
    try {
      const url = await uploadToBlob(file, eventImageFolder(form.title, form.date));
      setForm((f) => ({ ...f, img: url }));
      toast.success("Image uploaded to " + eventImageFolder(form.title, form.date));
    } catch (err) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.date) {
      toast.error("Title and date are required");
      return;
    }
    if (!form.img.trim()) {
      toast.error("Upload or paste an image URL");
      return;
    }

    if (editingId !== null) {
      const { error } = await supabase.from("events").update(form).eq("id", editingId);
      if (error) return toast.error("Save failed: " + error.message);
      toast.success("Event updated");
    } else {
      const { error } = await supabase.from("events").insert(form);
      if (error) return toast.error("Save failed: " + error.message);
      toast.success("Event added");
    }
    closeForm();
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) return toast.error("Delete failed: " + error.message);
    toast.success("Event deleted");
    load();
  };

  const handleToggleFeatured = async (event) => {
    const next = !event.is_featured;
    const { error } = await supabase.from("events").update({ is_featured: next }).eq("id", event.id);
    if (error) return toast.error("Update failed: " + error.message);
    toast.success(next ? "Featured this event" : "Unfeatured this event");
    load();
  };

  return (
    <div>
      {showForm && createPortal(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">{editingId !== null ? "Edit Event" : "Add New Event"}</h3>
            <form onSubmit={handleSave} className="space-y-4">
              <input type="text" placeholder="Event Title" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              <div className="grid grid-cols-2 gap-3">
                <input type="date" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
                <input type="text" placeholder="Venue" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} />
              </div>
              <textarea placeholder="Description" rows="3" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <div>
                <label className="flex items-center justify-between gap-3 px-3 py-2 border border-dashed border-gray-300 rounded-lg cursor-pointer text-sm text-gray-500 hover:bg-gray-50">
                  <span className="flex items-center gap-2">
                    {uploading ? <FiLoader className="animate-spin" /> : <FiUpload />}
                    Upload event image
                  </span>
                  <span className="text-xs text-gray-400">events/&lt;year&gt;/&lt;event-name&gt;/</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
                </label>
                {form.title && form.date && (
                  <p className="text-[11px] text-gray-400 mt-1">
                    Will be stored under: {"events/"}<span className="text-gray-600">{new Date(form.date).getFullYear()}</span>{" / "}
                    <span className="text-gray-600">{(form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60)) || "image"}</span>
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="…or paste an image URL" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  value={form.img} onChange={(e) => setForm({ ...form, img: e.target.value })} />
                {form.img && <img src={form.img} alt="preview" className="w-12 h-12 rounded-lg object-cover border border-gray-100" />}
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={closeForm}>Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">{editingId !== null ? "Save Changes" : "Save Event"}</button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-900">Events</h3>
        <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
          onClick={openAdd}><FiPlus className="mr-2" /> Add Event</button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16 text-gray-400"><FiLoader className="animate-spin mr-2" /> Loading…</div>
      ) : events.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-sm text-gray-400">
          No events yet. Add your first event.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-36">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 text-[11px] font-medium text-gray-700 rounded flex items-center gap-1">
                  <FiCalendar size={11} /> {dateLabel(event.date)}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-gray-900">{event.title}</h4>
                  <button
                    onClick={() => handleToggleFeatured(event)}
                    title={event.is_featured ? "Unfeature event" : "Feature event"}
                    className={`shrink-0 flex items-center gap-1 px-2 py-1 rounded-md text-xs border transition-colors ${
                      event.is_featured
                        ? "bg-amber-50 border-amber-200 text-amber-600"
                        : "border-gray-200 text-gray-400 hover:text-amber-500 hover:border-amber-200"
                    }`}
                  >
                    {event.is_featured ? <FaStar size={11} /> : <FiStar size={11} />}
                    <span className="hidden sm:inline">{event.is_featured ? "Featured" : "Feature"}</span>
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{event.description}</p>
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><FiMapPin size={11} /> {event.venue}</p>
                <div className="flex justify-end gap-3 mt-3 pt-3 border-t border-gray-100">
                  <button className="text-gray-400 hover:text-gray-700" title="Edit" onClick={() => openEdit(event)}><FiEdit2 size={15} /></button>
                  <button className="text-gray-400 hover:text-red-500" title="Delete" onClick={() => handleDelete(event.id)}><FiTrash2 size={15} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && events.length > 0 && (
        <div className="mt-4 flex justify-center">
          <button className="inline-flex items-center text-xs text-gray-400 hover:text-gray-600" onClick={load}><FiRefreshCw className="mr-1" /> Reload</button>
        </div>
      )}
    </div>
  );
};

export default EventsManagement;