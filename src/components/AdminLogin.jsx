import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sessionChecked, setSessionChecked] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setHasSession(Boolean(data.session));
      setSessionChecked(true);
    });
  }, []);

  const isAuthed = hasSession || localStorage.getItem("token") === import.meta.env.VITE_ADMIN_EMAIL;

  const signInKardoPlease = async (e) => {
    e.preventDefault();
    const credsMatch =
      email.trim().toLowerCase() === (import.meta.env.VITE_ADMIN_EMAIL || "").trim().toLowerCase() &&
      password === (import.meta.env.VITE_ADMIN_PASSWORD || "");

    if (credsMatch) {
      localStorage.setItem("token", import.meta.env.VITE_ADMIN_EMAIL);
      toast.success("Login successful!");
      navigate("/dashboard");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      localStorage.setItem("token", data.user.id);
      setHasSession(true);
      toast.success("Login successful!");
      navigate("/dashboard");
    }
  };

  if (!sessionChecked) return null;

  return (
    <>
      {isAuthed ? (
        <Dashboard />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
              <p className="text-sm text-gray-500 mt-1">Enter your credentials to access the dashboard</p>
            </div>
            <form className="space-y-5" onSubmit={signInKardoPlease}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 placeholder-gray-400"
                  placeholder="admin@codeoholics.com" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 placeholder-gray-400"
                  placeholder="••••••••" />
              </div>
              <button type="submit"
                className="w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-300">
                Sign in
              </button>
            </form>
            <p className="mt-6 text-center text-xs text-gray-400 border-t border-gray-100 pt-6">Protected admin area.</p>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default AdminLogin;
