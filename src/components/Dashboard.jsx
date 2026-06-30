import React, { useEffect, useState } from "react";
import { FiCalendar, FiFileText, FiPlus, FiEdit2, FiTrash2, FiLogOut } from "react-icons/fi";
import AdminLogin from "./AdminLogin";
import { useNavigate } from "react-router-dom";
import getEvents from "../Helper/getEvents";
import supabase from "../config/supabaseConfig";
import deleteEvent from "../Helper/deleteEvent";
import getUsers from "../Helper/getUsers";

const Dashboard = () => {
  getUsers();
  const [activeTab, setActiveTab] = useState("events");
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [showAddFormForm, setShowAddFormForm] = useState(false);
  let navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getEvents();
      setEvents(data);
    }
    getData();
  }, []);

  const [forms, setForms] = useState([
    { id: 1, title: "Event Registration", createdAt: "2025-02-20", responses: 124, status: "active" },
    { id: 2, title: "Feedback Survey", createdAt: "2025-03-01", responses: 57, status: "active" },
    { id: 3, title: "Speaker Application", createdAt: "2025-01-15", responses: 42, status: "inactive" },
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", description: "" });
  const [newForm, setNewForm] = useState({ title: "", description: "", fields: [] });

  const handleAddEvent = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("events").insert(newEvent);
    if (error) console.log(error.message);
    const id = events.length ? Math.max(...events.map((event) => event.id)) + 1 : 1;
    setEvents([{ id, ...newEvent }, ...events]);
    setNewEvent({ title: "", date: "", location: "", description: "" });
    setShowAddEventForm(false);
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    const id = forms.length ? Math.max(...forms.map((form) => form.id)) + 1 : 1;
    const now = new Date().toISOString().split("T")[0];
    setForms([{ id, ...newForm, createdAt: now, responses: 0, status: "active" }, ...forms]);
    setNewForm({ title: "", description: "", fields: [] });
    setShowAddFormForm(false);
  };

  const handleDeleteEvent = async (id) => {
    setEvents(events.filter((event) => event.id !== id));
    await deleteEvent(id);
  };

  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <>
      {localStorage.getItem("token") ? (
        <div className="min-h-screen mt-16 bg-gray-50">
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
                <p className="text-sm text-gray-500">Manage your events and forms.</p>
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors" onClick={handleSignOut}>
                <FiLogOut className="mr-2" /> Sign Out
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto py-8 px-6">
            <div className="flex border-b border-gray-200 mb-6">
              <button className={`py-3 px-5 text-sm font-medium flex items-center ${activeTab === "events" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("events")}><FiCalendar className="mr-2" /> Events</button>
              <button className={`py-3 px-5 text-sm font-medium flex items-center ${activeTab === "forms" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("forms")}><FiFileText className="mr-2" /> Forms</button>
            </div>

            {activeTab === "events" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-gray-900">Events</h3>
                  <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => setShowAddEventForm(true)}><FiPlus className="mr-2" /> Add Event</button>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event Name</th>
                        <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                        <th className="px-5 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {events.map((event) => (
                        <tr key={event.id}>
                          <td className="px-5 py-4">
                            <div className="text-sm font-medium text-gray-900">{event.title}</div>
                            <div className="text-xs text-gray-500">{event.description}</div>
                          </td>
                          <td className="px-5 py-4 text-sm text-gray-500">{event.date}</td>
                          <td className="px-5 py-4 text-sm text-gray-500">{event.location}</td>
                          <td className="px-5 py-4 text-sm text-right">
                            <button className="text-gray-400 hover:text-gray-600 mr-3"><FiEdit2 size={16} /></button>
                            <button className="text-gray-400 hover:text-red-500" onClick={() => handleDeleteEvent(event.id)}><FiTrash2 size={16} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {showAddEventForm && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
                      <h3 className="text-lg font-semibold mb-4">Add New Event</h3>
                      <form onSubmit={handleAddEvent} className="space-y-4">
                        <input type="text" placeholder="Event Title" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                          value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} required />
                        <input type="date" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                          value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} required />
                        <input type="text" placeholder="Location" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                          value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} required />
                        <textarea placeholder="Description" rows="3" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                          value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} required />
                        <input type="text" placeholder="Image URL" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                          value={newEvent.img} onChange={(e) => setNewEvent({ ...newEvent, img: e.target.value })} />
                        <div className="flex justify-end gap-2 pt-2">
                          <button type="button" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => setShowAddEventForm(false)}>Cancel</button>
                          <button type="submit" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">Save Event</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "forms" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-semibold text-gray-900">Forms</h3>
                  <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => setShowAddFormForm(true)}><FiPlus className="mr-2" /> Create Form</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {forms.map((form) => (
                    <div key={form.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-5">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-semibold text-gray-900">{form.title}</h4>
                          <span className={`px-2 py-0.5 text-xs rounded ${form.status === "active" ? "bg-gray-100 text-gray-700" : "bg-gray-50 text-gray-400"}`}>{form.status}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Created on {form.createdAt}</p>
                        <p className="text-xs text-gray-400 mt-1">{form.responses} responses</p>
                      </div>
                      <div className="border-t border-gray-100 p-3 flex justify-end gap-3">
                        <button className="text-xs text-gray-500 hover:text-gray-700"><FiEdit2 className="inline mr-1" />Edit</button>
                        <button className="text-xs text-gray-500 hover:text-red-500" onClick={() => handleDeleteForm(form.id)}><FiTrash2 className="inline mr-1" />Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
                {showAddFormForm && (
                  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">
                      <h3 className="text-lg font-semibold mb-4">Create New Form</h3>
                      <form onSubmit={handleAddForm} className="space-y-4">
                        <input type="text" placeholder="Form Title" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                          value={newForm.title} onChange={(e) => setNewForm({ ...newForm, title: e.target.value })} required />
                        <textarea placeholder="Description" rows="3" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                          value={newForm.description} onChange={(e) => setNewForm({ ...newForm, description: e.target.value })} required />
                        <div className="flex justify-end gap-2 pt-2">
                          <button type="button" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => setShowAddFormForm(false)}>Cancel</button>
                          <button type="submit" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800">Create Form</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <AdminLogin />
      )}
    </>
  );
};

export default Dashboard;
