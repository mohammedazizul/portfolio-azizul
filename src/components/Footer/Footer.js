import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer-wrapper">
      Copyright &copy; {year}
      <b>&nbsp;Mohammed Azizul Hoque Sheikh</b>
    </div>
  );
};

export default Footer;
