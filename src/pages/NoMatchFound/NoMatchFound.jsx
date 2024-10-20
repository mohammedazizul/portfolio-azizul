import "./style.css";
import React from "react";
import sad from "../../assets/emojis/sad-emoji.png";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const NoMatchFound = () => {
  return (
    <div className="">
      <NavBar />
      <div className="noMatchDiv">
        <h2>We are Sorry</h2>
        <img src={sad} alt="sad emoji icon" />
        <h1>ERROR : 404</h1>
        <h2>Page not found</h2>
        <p>
            The Page you are looking for dose not exists or an another error
            occurred
        </p>
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
};

export default NoMatchFound;
