import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import supabase from "../config/supabaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Dashboard from "./Dashboard";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const component = useRef(null);
  let uid = "";
  const signInKardoPlease = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error(error.message);
      console.log(error.message);
    } else {
      uid = data.user.id;

      localStorage.setItem("token", data.user.id);
      toast.success("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard after successful login
    }

    console.log(data);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the form elements
      gsap.fromTo(
        ".login-header",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power1.out" }
      );

      gsap.fromTo(
        ".login-form",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power1.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".login-btn",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power1.in", delay: 0.4 }
      );
    }, component);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {localStorage.getItem("token") ? (
        <Dashboard />
      ) : (
        <div
          ref={component}
          className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
        >
          <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg border border-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald-500/20 hover:shadow-lg">
            {/* Header */}
            <div className="login-header text-center">
              <h1 className="text-4xl font-bold tracking-tight text-emerald-400">
                Admin Portal
              </h1>
              <p className="mt-3 text-gray-300 text-sm">
                Enter your credentials to access the dashboard
              </p>
              <div className="mt-6 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full"></div>
            </div>

            {/* Login Form */}
            <form
              className="login-form mt-8 space-y-6"
              onSubmit={signInKardoPlease}
            >
              <div className="space-y-5">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
                      placeholder="admin@codeoholics.com"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-emerald-500 bg-gray-700 border-gray-600 rounded focus:ring-emerald-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="block ml-2 text-sm text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="login-btn relative inline-flex w-full items-center justify-center px-8 py-3 overflow-hidden font-medium text-emerald-400 border-2 border-emerald-400 rounded-full group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-500 rounded-full group-hover:w-full group-hover:h-56"></span>
                  <span className="relative group-hover:text-white transition-colors duration-300 ease-out">
                    Sign in
                  </span>
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="pt-4 text-center text-sm text-gray-400 border-t border-gray-700">
              <p>Protected admin area. Unauthorized access is prohibited.</p>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default AdminLogin;
