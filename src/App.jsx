import React from 'react';
import "./App.css";
import ReactGA from 'react-ga';
import { useEffect } from "react";
import { 
  BrowserRouter as Router, Routes, Route 
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Projects from "./components/Projects/Projects.jsx";
import NoMatchFound from "./pages/NoMatchFound/NoMatchFound.jsx";
import About from "./pages/About/About.jsx";

// Initialize Google Analytics
ReactGA.initialize('G-PB2B26E0D0');

function App() {
  useEffect(() => {
    // Track page view on component mount
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NoMatchFound />} />
      </Routes>
    </Router>
  );
}

export default App;
