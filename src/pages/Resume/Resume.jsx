import "./style.css";
import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";

const Resume = () => {
  return (
    <div className="resume-main-div">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            shape: {
              type: "square",
              stroke: {
                width: 5,
                color: "#4682B4",
              },
            },
          },
        }}
      />
      <NavBar />
      <div className="noMatchDiv">
        <a
          href="https://drive.google.com/file/d/1HGyNSa4U_5mshxbhJAO6zxQ2ppdb0H6_/view?usp=sharing"
          target="_blank"
          rel="noreffere noreferrer"
          download
          className="btn-resume-download"
        >
          Click to Download my Resume &nbsp;
          <FontAwesomeIcon icon={faFileDownload} />
        </a>
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
