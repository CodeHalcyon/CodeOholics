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
import { useState, useEffect } from "react";
import Results from "./pages/Results";
import SplashScreen from "./components/SplashScreen";
import getEvents from "./Helper/getEvents";
function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const [featuredEvent, setFeaturedEvent] = useState(null);
  const [featuredLoaded, setFeaturedLoaded] = useState(false);

  useEffect(() => {
    getEvents().then((events) => {
      const featured = events?.find((e) => e.is_featured) || null;
      setFeaturedEvent(featured);
      setFeaturedLoaded(true);
    });
  }, []);

  const popupImage = featuredEvent?.img;
  const redirectUrl = featuredEvent?.venue || "https://cmrtc.ac.in";
  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      {splashDone && (
        <>
          {showModal && featuredLoaded && popupImage && (
            <PopupModal 
              imageUrl={popupImage}
              redirectUrl={redirectUrl}
              onClose={() => setShowModal(false)}
            />
          )}
          <Navbar />
          <div>
            <Analytics/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/opportunities" element={<Opportunities />} />
              {/* <Route path="/resources" element={<Resources />} /> */}
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/executive-results" element={<Results/>} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
