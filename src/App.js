import "./App.css";
// adding bootstrap css file
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
import ReactGA from 'react-ga';
import { useEffect } from "react";

ReactGA.initialize('G-PB2B26E0D0');

function App() {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

// TO DO - 02.03.2022
// updating React
// adding latest React Router
// adding email provider
// fixing card design
// restructuring the project
// proper JSON files for data
// ...
