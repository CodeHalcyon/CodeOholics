import React, { useState, useEffect } from "react";
import { FiCalendar, FiFileText, FiUsers, FiBriefcase, FiMail, FiPlus, FiEdit2, FiTrash2, FiLogOut } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import AdminLogin from "./AdminLogin";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseConfig";
import EventsManagement from "./EventsManagement";
import TeamManagement from "./TeamManagement";
import OpportunitiesManagement from "./OpportunitiesManagement";
import ContactQueries from "./ContactQueries";
import getUsers from "../Helper/getUsers";

const CountBadge = ({ n }) => (
  <span className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-900 text-white/90">{n}</span>
);

const Dashboard = () => {
  getUsers();
  const [activeTab, setActiveTab] = useState("events");
  const [showAddFormForm, setShowAddFormForm] = useState(false);
  const [counts, setCounts] = useState({ events: 0, team: 0, opps: 0, queries: 0 });
  const [sessionChecked, setSessionChecked] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setHasSession(Boolean(data.session));
      setSessionChecked(true);
    });
  }, []);

  const isAuthed = hasSession || localStorage.getItem("token") === import.meta.env.VITE_ADMIN_EMAIL;

  useEffect(() => {
    const fetchCounts = async () => {
      const [{ count: e }, { count: t }, { count: o }, { count: q }] = await Promise.all([
        supabase.from("events").select("*", { count: "exact", head: true }),
        supabase.from("core_team").select("*", { count: "exact", head: true }),
        supabase.from("opportunities").select("*", { count: "exact", head: true }),
        supabase.from("contact_messages").select("*", { count: "exact", head: true }),
      ]);
      setCounts({ events: e ?? 0, team: t ?? 0, opps: o ?? 0, queries: q ?? 0 });
    };
    fetchCounts();
  }, [activeTab]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("token");
    navigate("/");
  };

  const [forms, setForms] = useState([
    { id: 1, title: "Event Registration", createdAt: "2025-02-20", responses: 124, status: "active" },
    { id: 2, title: "Feedback Survey", createdAt: "2025-03-01", responses: 57, status: "active" },
    { id: 3, title: "Speaker Application", createdAt: "2025-01-15", responses: 42, status: "inactive" },
  ]);

  const [newForm, setNewForm] = useState({ title: "", description: "", fields: [] });

  const handleAddForm = (e) => {
    e.preventDefault();
    const id = forms.length ? Math.max(...forms.map((form) => form.id)) + 1 : 1;
    const now = new Date().toISOString().split("T")[0];
    setForms([{ id, ...newForm, createdAt: now, responses: 0, status: "active" }, ...forms]);
    setNewForm({ title: "", description: "", fields: [] });
    setShowAddFormForm(false);
  };

  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <>
      {sessionChecked && (isAuthed ? (
        <div className="min-h-screen mt-16 bg-gray-50">
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
                <p className="text-sm text-gray-500">Manage your events, team and forms.</p>
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors" onClick={handleSignOut}>
                <FiLogOut className="mr-2" /> Sign Out
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto py-8 px-6">
            <div className="flex border-b border-gray-200 mb-6">
              <button className={`py-3 px-5 text-sm font-medium flex items-center ${activeTab === "events" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("events")}><FiCalendar className="mr-2" /> Events <CountBadge n={counts.events} /></button>
              <button className={`py-3 px-5 text-sm font-medium flex items-center ${activeTab === "team" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("team")}><FiUsers className="mr-2" /> Core Team <CountBadge n={counts.team} /></button>
              <button className={`py-3 px-5 text-sm font-medium flex items-center ${activeTab === "opps" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("opps")}><FiBriefcase className="mr-2" /> Opportunities <CountBadge n={counts.opps} /></button>
              <button className={`py-3 px-5 text-sm font-medium flex items-center ${activeTab === "queries" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("queries")}><FiMail className="mr-2" /> Queries <CountBadge n={counts.queries} /></button>
              <button className={`py-3 px-5 text-sm font-medium flex items-center ${activeTab === "forms" ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                onClick={() => setActiveTab("forms")}><FiFileText className="mr-2" /> Forms</button>
            </div>

            {activeTab === "events" && <EventsManagement />}

            {activeTab === "team" && <TeamManagement />}

            {activeTab === "opps" && <OpportunitiesManagement />}

            {activeTab === "queries" && <ContactQueries />}

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
      ))}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Dashboard;