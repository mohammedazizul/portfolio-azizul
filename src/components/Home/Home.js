import React from "react";
import Particles from "react-particles-js";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = () => {
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
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#4682B4",
              },
            },
          },
        }}
      />
      <NavBar />
      <Header />
    </>
  );
};

export default Home;
