import "./Contact.css";
import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import azizulImage from "../../images/azizulImage.png";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { 
  faEnvelope, 
  faMapMarkerAlt, 
  faPhone,
  faDownload 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faWhatsappSquare,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer.jsx";

const Contact = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      value: "mohammedazizulhoquesheikh@gmail.com",
      link: "mailto:mohammedazizulhoquesheikh@gmail.com",
      color: "#B23121"
    },
    {
      icon: faPhone,
      title: "Phone",
      value: "+60 11-6433 4795",
      link: "tel:+601164334795",
      color: "#25D366"
    },
    {
      icon: faMapMarkerAlt,
      title: "Location",
      value: "Malaysia",
      link: "#",
      color: "#4682B4"
    }
  ];

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
    <>
      <div className="contact-wrapper">
        {/* Particles Background */}
        <div className="particles-container">
          <Particles
            init={particlesInit}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 120,
              particles: {
                color: {
                  value: "#4682B4",
                },
                links: {
                  color: "#4682B4",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 0.8,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 40,
                },
                opacity: {
                  value: 0.4,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>

        <Container fluid className="contact-content py-5">
          <Row className="mb-4">
            <Col>
              <div className="text-center">
                <h1 className="contact-title mb-3">Get In Touch</h1>
                <p className="contact-subtitle text-muted">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            {/* Profile Card */}
            <Col lg={4} md={6}>
              <Card className="profile-card h-100 shadow-sm">
                <div className="profile-image-container">
                  <Card.Img
                    variant="top"
                    src={azizulImage}
                    alt="Mohammed Azizul Hoque Sheikh"
                    className="profile-image"
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="profile-name">
                    Mohammed Azizul Hoque Sheikh
                  </Card.Title>
                  <Card.Text className="profile-title">
                    Full Stack Developer
                  </Card.Text>
                  <p className="profile-description">
                    Passionate about creating innovative web solutions and sharing knowledge through writing.
                  </p>
                  
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
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
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Information Card */}
            <Col lg={4} md={6}>
              <Card className="contact-info-card h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="card-title">
                    <h4>Contact Information</h4>
                  </Card.Title>
                  
                  <div className="contact-details">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="contact-item">
                        <div className="contact-icon">
                          <FontAwesomeIcon
                            icon={info.icon}
                            style={{ color: info.color }}
                          />
                        </div>
                        <div className="contact-text">
                          <h6>{info.title}</h6>
                          <a 
                            href={info.link}
                            className="contact-link"
                            target={info.link.startsWith('http') ? "_blank" : "_self"}
                            rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Quick Actions Card */}
            <Col lg={4} md={12}>
              <Card className="quick-actions-card h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="card-title">
                    <h4>Quick Actions</h4>
                  </Card.Title>
                  
                  <div className="quick-actions">
                    <Button
                      href="mailto:mohammedazizulhoquesheikh@gmail.com"
                      variant="outline-primary"
                      size="lg"
                      className="action-btn mb-3"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                      Send Email
                    </Button>
                    
                    <Button
                      href="https://wa.me/+601164334795"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-success"
                      size="lg"
                      className="action-btn mb-3"
                    >
                      <FontAwesomeIcon icon={faWhatsappSquare} className="me-2" />
                      WhatsApp
                    </Button>
                    
                    <Button
                      href="https://drive.google.com/file/d/1HGyNSa4U_5mshxbhJAO6zxQ2ppdb0H6_/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-secondary"
                      size="lg"
                      className="action-btn"
                    >
                      <FontAwesomeIcon icon={faDownload} className="me-2" />
                      Download Resume
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Additional Info Row */}
          <Row className="mt-5">
            <Col>
              <Card className="availability-card shadow-sm">
                <Card.Body className="text-center">
                  <h4>Availability</h4>
                  <p className="availability-text">
                    I'm currently available for freelance work and full-time opportunities. 
                    Feel free to reach out if you'd like to discuss potential collaborations!
                  </p>
                  <div className="availability-status">
                    <span className="status-dot"></span>
                    <span className="status-text">Available for new opportunities</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
