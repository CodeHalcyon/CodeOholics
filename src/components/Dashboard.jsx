import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiFileText,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiLogOut,
} from "react-icons/fi";
import AdminLogin from "./AdminLogin";
import { useNavigate } from "react-router-dom";
import getEvents from "../Helper/getEvents";
import supabase from "../config/supabaseConfig";
import deleteEvent from "../Helper/deleteEvent";
import getUsers from "../Helper/getUsers";

const Dashboard = () => {
  // States for the different sections
  getUsers();
  const [activeTab, setActiveTab] = useState("events");
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [showAddFormForm, setShowAddFormForm] = useState(false);
  let navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  // Dummy data for events
  const [events, setEvents] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getEvents();
      setEvents(data);
    }
    getData();
  }, []);
  // Dummy data for forms
  const [forms, setForms] = useState([
    {
      id: 1,
      title: "Event Registration",
      createdAt: "2025-02-20",
      responses: 124,
      status: "active",
    },
    {
      id: 2,
      title: "Feedback Survey",
      createdAt: "2025-03-01",
      responses: 57,
      status: "active",
    },
    {
      id: 3,
      title: "Speaker Application",
      createdAt: "2025-01-15",
      responses: 42,
      status: "inactive",
    },
  ]);
  // Event form state
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  // Form form state (meta-form for creating forms)
  const [newForm, setNewForm] = useState({
    title: "",
    description: "",
    fields: [],
  });

  // Handler for adding a new event
  const handleAddEvent = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("events").insert(newEvent);
    if (error) console.log(error.message);
    else console.log("event added", data);

    const id = events.length
      ? Math.max(...events.map((event) => event.id)) + 1
      : 1;
    setEvents([...events, { id, ...newEvent }]);
    setNewEvent({ title: "", date: "", location: "", description: "" });
    setShowAddEventForm(false);
  };

  // Handler for adding a new form
  const handleAddForm = (e) => {
    e.preventDefault();
    const id = forms.length ? Math.max(...forms.map((form) => form.id)) + 1 : 1;
    const now = new Date().toISOString().split("T")[0];
    setForms([
      ...forms,
      { id, ...newForm, createdAt: now, responses: 0, status: "active" },
    ]);
    setNewForm({ title: "", description: "", fields: [] });
    setShowAddFormForm(false);
  };
  // Handler for deleting an event
  const handleDeleteEvent = async (id) => {
    try {
      setEvents(events.filter((event) => event.id !== id)); // Optimistic UI update

      const result = await deleteEvent(id);
      if (!result) {
        console.log(result);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  // Handler for deleting a form
  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <>
      {localStorage.getItem("token") ? (
        <div className="min-h-screen mt-[100px] bg-gray-100">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
              {/* Welcome Text */}
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Welcome back, Admin!
                </h2>
                <p className="opacity-80">
                  Manage your events and forms from this central dashboard.
                </p>
              </div>

              {/* Sign Out Button */}
              <button
                className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto py-8 px-4">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`py-3 px-6 font-medium flex items-center ${
                  activeTab === "events"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("events")}
              >
                <FiCalendar className="mr-2" />
                Events Management
              </button>
              <button
                className={`py-3 px-6 font-medium flex items-center ${
                  activeTab === "forms"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("forms")}
              >
                <FiFileText className="mr-2" />
                Forms Management
              </button>
            </div>

            {/* Events Tab */}
            {activeTab === "events" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Upcoming Events</h3>
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-700 transition-colors"
                    onClick={() => setShowAddEventForm(true)}
                  >
                    <FiPlus className="mr-2" />
                    Add New Event
                  </button>
                </div>

                {/* Events List */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Event Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {events.map((event) => (
                        <tr key={event.id}>
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">
                              {event.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {event.description}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {event.date}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {event.location}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium">
                            <div className="flex space-x-3">
                              <button className="text-indigo-600 hover:text-indigo-900">
                                <FiEdit2 size={18} />
                              </button>
                              <button
                                className="text-red-600 hover:text-red-900"
                                onClick={() => handleDeleteEvent(event.id)}
                              >
                                <FiTrash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Add Event Modal */}
                {showAddEventForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                      <h3 className="text-xl font-semibold mb-4">
                        Add New Event
                      </h3>
                      <form onSubmit={handleAddEvent}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Event Title
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={newEvent.title}
                            onChange={(e) =>
                              setNewEvent({
                                ...newEvent,
                                title: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={newEvent.date}
                            onChange={(e) =>
                              setNewEvent({ ...newEvent, date: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={newEvent.location}
                            onChange={(e) =>
                              setNewEvent({
                                ...newEvent,
                                location: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                          </label>
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={newEvent.description}
                            onChange={(e) =>
                              setNewEvent({
                                ...newEvent,
                                description: e.target.value,
                              })
                            }
                            rows="3"
                            required
                          ></textarea>
                        </div>
                        {/* ✅ New Input for Image Source Link */}
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Event Image URL
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter image URL..."
                            value={newEvent.img}
                            onChange={(e) =>
                              setNewEvent({
                                ...newEvent,
                                src: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <button
                            type="button"
                            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                            onClick={() => setShowAddEventForm(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                          >
                            Save Event
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Forms Tab */}
            {activeTab === "forms" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Your Forms</h3>
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-700 transition-colors"
                    onClick={() => setShowAddFormForm(true)}
                  >
                    <FiPlus className="mr-2" />
                    Create New Form
                  </button>
                </div>

                {/* Forms List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {forms.map((form) => (
                    <div
                      key={form.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-semibold">
                            {form.title}
                          </h4>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              form.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {form.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          Created on {form.createdAt}
                        </p>
                        <div className="mt-4 text-gray-500">
                          <p>{form.responses} responses</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 flex justify-between">
                        <button className="text-indigo-600 flex items-center text-sm font-medium">
                          <FiEdit2 className="mr-1" />
                          Edit
                        </button>
                        <button
                          className="text-red-600 flex items-center text-sm font-medium"
                          onClick={() => handleDeleteForm(form.id)}
                        >
                          <FiTrash2 className="mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Form Modal */}
                {showAddFormForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                      <h3 className="text-xl font-semibold mb-4">
                        Create New Form
                      </h3>
                      <form onSubmit={handleAddForm}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Form Title
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={newForm.title}
                            onChange={(e) =>
                              setNewForm({ ...newForm, title: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                          </label>
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={newForm.description}
                            onChange={(e) =>
                              setNewForm({
                                ...newForm,
                                description: e.target.value,
                              })
                            }
                            rows="3"
                            required
                          ></textarea>
                        </div>
                        {/* Form field builder would go here in a real implementation */}
                        <div className="bg-gray-100 p-4 rounded-md mb-4">
                          <p className="text-sm text-gray-500">
                            Form builder fields would appear here
                          </p>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <button
                            type="button"
                            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                            onClick={() => setShowAddFormForm(false)}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                          >
                            Create Form
                          </button>
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
