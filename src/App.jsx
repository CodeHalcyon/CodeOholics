import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Opportunities from "./components/Opportunities";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import PopupModal from "./components/PopupModal";
import { Analytics } from "@vercel/analytics/react"
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(true);

  // You can customize these values
  const popupImage =
    "https://etvqaruci3mfadph.public.blob.vercel-storage.com/code%20titans.jpg"; // Replace with your actual image URL
  const redirectUrl = "https://forms.gle/B5Fbyt4zyjZVEhc87";
  return (
    <>
      {showModal && (
        <PopupModal 
          imageUrl={popupImage}
          redirectUrl={redirectUrl}
          onClose={() => setShowModal(false)}
        />
      )}
      <Navbar />
      <Analytics/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opportunities" element={<Opportunities />} />
        {/* <Route path="/resources" element={<Resources />} /> */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
