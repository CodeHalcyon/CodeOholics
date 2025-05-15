import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Resources from "./components/Resource";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import PopupModal from "./components/PopupModal";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(true);

  // You can customize these values
  const popupImage =
    "https://etvqaruci3mfadph.public.blob.vercel-storage.com/h4m%20poster-PxQeGPdguPq0yc9ShWIpCLbaGmEBuH.jpg"; // Replace with your actual image URL
  const redirectUrl = "https://unstop.com/p/hack-4-mini-2nd-edition-codeoholics-1479552?lb=C7rx6Xn8&utm_medium=Share&utm_source=shortUrl";
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
