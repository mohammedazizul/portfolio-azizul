import './App.css';
// adding bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';

function App() {
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
          <Route>
            
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
