import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";
import { FiMail, FiTrash2, FiInbox } from "react-icons/fi";
import { toast } from "react-toastify";

const ContactQueries = () => {
  const [queries, setQueries] = useState([]);

  const load = async () => {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) return toast.error("Failed to load: " + error.message);
    setQueries(data || []);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) return toast.error("Delete failed: " + error.message);
    toast.success("Query deleted");
    load();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-gray-900">Contact Queries</h3>
        <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors" onClick={load}>
          <FiMail className="mr-2" /> Refresh
        </button>
      </div>

      {queries.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-200 rounded-xl">
          <FiInbox className="text-gray-300 mb-3" size={28} />
          <p className="text-sm text-gray-400">No queries yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {queries.map((q) => (
            <div key={q.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {q.name ? q.name.trim().charAt(0).toUpperCase() : "?"}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{q.name}</h4>
                    <a href={`mailto:${q.email}`} className="text-xs text-gray-400 hover:text-gray-600">{q.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">
                    {new Date(q.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                  <button className="inline-flex items-center text-xs text-gray-400 hover:text-red-500" onClick={() => remove(q.id)}>
                    <FiTrash2 className="mr-1" /> Delete
                  </button>
                </div>
              </div>
              {q.subject && <p className="text-sm font-medium text-gray-700 mb-1">{q.subject}</p>}
              <p className="text-sm text-gray-500 leading-relaxed">{q.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactQueries;