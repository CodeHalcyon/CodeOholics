import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './index.css'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import Contact from './components/Contact'
import Resources from './components/Resource'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
