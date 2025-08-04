import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode,
  faArrowRight,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { 
  faGithub,
  faLinkedin,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Calculate years of experience from 2022
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  const socialLinks = [
    { icon: faGithub, link: "https://github.com/mohammedazizul", color: "#333", title: "GitHub" },
    { icon: faLinkedin, link: "https://www.linkedin.com/in/mohammedazizul/", color: "#0077b5", title: "LinkedIn" },
    { icon: faMedium, link: "https://mohammedazizul.medium.com/", color: "#00AB6C", title: "Medium" }
  ];

  return (
    <div className="home-wrapper">
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
                value: 50,
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

      {/* Hero Section */}
      <section className="hero-section">
        <Container fluid className="hero-content">
          <Row className="align-items-center min-vh-100">
            <Col lg={8} className="text-center text-lg-start">
              <div className="hero-text">
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">Azizul Hoque</span>
                </h1>
                <div className="hero-subtitle">
                  <span className="static-text">I'm a </span>
                  <span className="typed-text">
                    <Typewriter
                      words={["Web Developer", "Full Stack Developer", "Software Engineer", "Problem Solver"]}
                      typeSpeed={50}
                      deleteSpeed={70}
                      loop
                    />
                  </span>
                </div>
                <p className="hero-description">
                  Passionate about creating innovative web solutions and turning ideas into reality. 
                  I specialize in building modern, responsive, and user-friendly applications.
                </p>
                <div className="hero-actions">
                  <Button
                    href="/projects"
                    variant="primary"
                    size="lg"
                    className="hero-btn me-3"
                  >
                    View My Work
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline-primary"
                    size="lg"
                    className="hero-btn"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    Get In Touch
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div className="hero-image-container">
                <div className="hero-image-placeholder">
                  <FontAwesomeIcon icon={faCode} size="6x" className="hero-icon" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="about-card">
                <Card.Body>
                  <h2 className="section-title">About Me</h2>
                  <p className="about-text">
                    I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                    I love creating elegant solutions to complex problems and building applications that make a difference.
                  </p>
                  <p className="about-text">
                    With expertise in Javascript, React, Node.js, and MySQL, I develop scalable web applications and cloud services 
                    that provide exceptional user experiences. I'm always eager to learn new technologies 
                    and take on challenging projects.
                  </p>
                  <div className="about-stats">
                    <div className="stat-item">
                      <h3>{yearsOfExperience}+</h3>
                      <p>Years Experience</p>
                    </div>
                    <div className="stat-item">
                      <h3>20+</h3>
                      <p>Projects Completed</p>
                    </div>
                    <div className="stat-item">
                      <h3>5+</h3>
                      <p>Technologies</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <Container>
          <Row>
            <Col>
              <Card className="cta-card">
                <Card.Body className="text-center">
                  <h2 className="cta-title">Ready to Start a Project?</h2>
                  <p className="cta-text">
                    I'm always open to discussing new opportunities and interesting projects. 
                    Let's work together to bring your ideas to life!
                  </p>
                  <div className="cta-actions">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="lg"
                      className="me-3"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                      Start a Conversation
                    </Button>
                    <Button
                      href="/projects"
                      variant="outline-primary"
                      size="lg"
                    >
                      <FontAwesomeIcon icon={faArrowRight} className="me-2" />
                      View My Projects
                    </Button>
                  </div>
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
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
