import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faWhatsappSquare,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const socialLinks = [
    {
      icon: faLinkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mohammedazizul/",
      color: "#0077b5"
    },
    {
      icon: faGithubSquare,
      title: "GitHub",
      link: "https://github.com/mohammedazizul",
      color: "#333"
    },
    {
      icon: faWhatsappSquare,
      title: "WhatsApp",
      link: "https://wa.me/+601164334795",
      color: "#25D366"
    },
    {
      icon: faMedium,
      title: "Medium",
      link: "https://mohammedazizul.medium.com/",
      color: "#00AB6C"
    }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Mohammed Azizul Hoque Sheikh</h4>
          <p className="footer-subtitle">Full Stack Developer</p>
          <p className="footer-description">
            Passionate about creating innovative web solutions and sharing knowledge through writing.
          </p>
        </div>

        <div className="footer-section">
          <h5 className="footer-section-title">Connect With Me</h5>
          <div className="footer-social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title={social.title}
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  size="lg"
                  style={{ color: social.color }}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h5 className="footer-section-title">Quick Links</h5>
          <div className="footer-links">
            <a href="/home" className="footer-link">Home</a>
            <a href="/projects" className="footer-link">Projects</a>
            <a href="/blogs" className="footer-link">Blogs</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-copyright">
          <p>
            Copyright &copy; {year} <strong>Mohammed Azizul Hoque Sheikh</strong>. 
            All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with ❤️ using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
