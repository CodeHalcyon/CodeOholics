import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Resources from "./components/Resource";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
