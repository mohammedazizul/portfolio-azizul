import './App.css';
// adding bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
      <Particles 
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape:{
            type: "circle",
            stroke: {
              width: 6,
              color: "#4682B4"
            }
          }
        }
      }}
      />
      <NavBar />
      <Header />
    </>
  );
}

export default App;
