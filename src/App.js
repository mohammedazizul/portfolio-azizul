import "./App.css";
import ReactGA from 'react-ga';
import { useEffect } from "react";
import { 
  BrowserRouter as Router, Routes, Route 
} from "react-router-dom";
import Home from "./components/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import NoMatchFound from "./pages/NoMatchFound/NoMatchFound";
import Resume from "./pages/Resume/Resume";

ReactGA.initialize('G-PB2B26E0D0');

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NoMatchFound />} />
      </Routes>
    </Router>
  );
}

export default App;

// TO DO - 20.10.2024
// adding email provider
// fixing card design
// restructuring the project
// proper JSON files for data
// update react-particles-js
// ...
