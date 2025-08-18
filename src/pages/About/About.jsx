import React from "react";
import Footer from "../../components/Footer/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFileDownload, 
  faEye, 
  faGraduationCap, 
  faBriefcase, 
  faCode, 
  faTools,
  faCalendarAlt,
  faMapMarkerAlt,
  faExternalLinkAlt,
  faEnvelope,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import { 
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faNodeJs,
  faGitAlt,
  faNpm,
  faPython,
  faJava
} from "@fortawesome/free-brands-svg-icons";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "./style.css";

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const experienceData = [
    {
      title: "Software Developer",
      company: "TRKYE Transportation Sdn. Bhd.",
      period: "Nov 2022 - Present",
      location: "Malaysia",
      description: "Leading the design and development of scalable web applications, managing large-scale databases, and implementing secure payment systems. Key achievements include doubling operational efficiency through custom task management systems and achieving 80% reduction in API response times.",
      technologies: [
        { name: "JavaScript", icon: faJs, color: "" },
        { name: "React.js", icon: faReact, color: "#61DAFB" },
        { name: "Node.js", icon: faNodeJs, color: "#339933" },
        { name: "MySQL", icon: faDatabase, color: "#336791" },
        { name: "Python", icon: faPython, color: "#3776AB" },
        { name: "Express.js", icon: faNodeJs, color: "#000000" }
      ]
    },
    {
      title: "Junior Web Developer",
      company: "TRKYE Transportation Sdn. Bhd.",
      period: "Oct 2021 - Oct 2022",
      location: "Malaysia",
      description: "Assisted in designing and developing web applications and cloud infrastructure. Developed custom React components and implemented database optimization strategies that reduced cloud costs by 95%, saving USD 8,000 monthly.",
      technologies: [
        { name: "React.js", icon: faReact, color: "#61DAFB" },
        { name: "JavaScript", icon: faJs, color: "" },
        { name: "HTML5", icon: faHtml5, color: "#E34F26" },
        { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
        { name: "Git", icon: faGitAlt, color: "#F05032" },
        { name: "Database", icon: faDatabase, color: "#336791" }
      ]
    }
  ];

  const educationData = [
    {
      degree: "Bachelor of Computer Science (Software Engineering)",
      institution: "University of Wollongong (UOW)",
      period: "August 2019 - August 2022",
      location: "Wollongong, New South Wales, Australia",
      description: "Completed degree with honors and awards for outstanding scholastic achievements and best marketing and presentation for final year project."
    }
  ];

  const skillsData = {
    proficient: [
      { name: "JavaScript", icon: faJs, color: "" },
      { name: "Node.js", icon: faNodeJs, color: "#339933" },
      { name: "Express.js", icon: faNodeJs, color: "#000000" },
      { name: "React.js", icon: faReact, color: "#61DAFB" },
      { name: "HTML5", icon: faHtml5, color: "#E34F26" },
      { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
      { name: "SQL", icon: faDatabase, color: "#336791" },
      { name: "NoSQL", icon: faDatabase, color: "#47A248" },
      { name: "RESTful APIs", icon: faCode, color: "#4682B4" },
      { name: "Git", icon: faGitAlt, color: "#F05032" },
      { name: "GitHub", icon: faGitAlt, color: "#333" }
    ],
    familiar: [
      { name: "TypeScript", icon: faCode, color: "#3178C6" },
      { name: "Next.js", icon: faReact, color: "#000000" },
      { name: "Python", icon: faPython, color: "#3776AB" },
      { name: "Flask", icon: faPython, color: "#000000" },
      { name: "Redux", icon: faCode, color: "#764ABC" },
      { name: "Nginx", icon: faCode, color: "#009639" },
      { name: "MongoDB", icon: faDatabase, color: "#47A248" },
      { name: "PL/SQL", icon: faDatabase, color: "#F80000" },
      { name: "Tailwind CSS", icon: faCss3Alt, color: "#06B6D4" }
    ],
    cloudDevOps: [
      { name: "DigitalOcean", icon: faCode, color: "#0080FF" },
      { name: "Firebase", icon: faCode, color: "#FFCA28" },
      { name: "Heroku", icon: faCode, color: "#430098" },
      { name: "Netlify", icon: faCode, color: "#00C7B7" },
      { name: "Snowflake", icon: faCode, color: "#29B5E8" },
      { name: "Linux", icon: faCode, color: "#FCC624" },
      { name: "CentOS", icon: faCode, color: "#932279" }
    ],
    softSkills: [
      { name: "Problem Solving", icon: faCode, color: "#4ECDC4" },
      { name: "Team Collaboration", icon: faCode, color: "#45B7D1" },
      { name: "Communication", icon: faCode, color: "#96CEB4" },
      { name: "Time Management", icon: faCode, color: "#FFEAA7" },
      { name: "Adaptability", icon: faCode, color: "#DDA0DD" }
    ]
  };

  return (
    <div className="about-wrapper">
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

      <Container fluid className="about-content">
        {/* Header Section */}
        <Row className="mb-5">
          <Col>
            <div className="about-header text-center">
              <h1 className="about-title">About Me</h1>
              <p className="about-subtitle">
                My professional experience, skills, and qualifications
              </p>
              <div className="about-actions">
                <Button
                  href="https://docs.google.com/document/d/1mnEXPmPDQi7tnYKBkPAL98V3DX01tutG/edit?usp=sharing&ouid=110347107158718939028&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-primary"
                  size="lg"
                  className="about-btn me-3"
                >
                  <FontAwesomeIcon icon={faEye} className="me-2" />
                  View Resume
                </Button>
                <Button
                  href="https://drive.google.com/file/d/1m51QFBR5P13T71vjZFKyX2CJquiQ3Ju3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="about-btn"
                >
                  <FontAwesomeIcon icon={faFileDownload} className="me-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="mb-4">
          <Col>
            <Card className="about-card skills-card">
              <Card.Body>
                <Card.Title className="section-title">
                  <FontAwesomeIcon icon={faCode} className="me-2" />
                  Skills & Technologies
                </Card.Title>
                
                <div className="skills-section">
                  <h6 className="skill-category">
                    <FontAwesomeIcon icon={faCode} className="me-1" />
                    Proficient In
                  </h6>
                  <div className="skill-tags">
                    {skillsData.proficient.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="skill-badge"
                        style={{ 
                          backgroundColor: skill.color,
                          color: skill.color === '#F7DF1E' ? '#000' : '#fff',
                          border: skill.color === '#F7DF1E' ? '1px solid #000' : 'none'
                        }}
                      >
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className="me-1" 
                          style={{ color: skill.color === '#F7DF1E' ? '#000' : '#fff' }}
                        />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="skills-section">
                  <h6 className="skill-category">
                    <FontAwesomeIcon icon={faTools} className="me-1" />
                    Familiar With
                  </h6>
                  <div className="skill-tags">
                    {skillsData.familiar.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="skill-badge"
                        style={{ 
                          backgroundColor: skill.color,
                          color: skill.color === '#F7DF1E' ? '#000' : '#fff',
                          border: skill.color === '#F7DF1E' ? '1px solid #000' : 'none'
                        }}
                      >
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className="me-1" 
                          style={{ color: skill.color === '#F7DF1E' ? '#000' : '#fff' }}
                        />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="skills-section">
                  <h6 className="skill-category">
                    <FontAwesomeIcon icon={faTools} className="me-1" />
                    Cloud & DevOps
                  </h6>
                  <div className="skill-tags">
                    {skillsData.cloudDevOps.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="skill-badge"
                        style={{ 
                          backgroundColor: skill.color,
                          color: skill.color === '#F7DF1E' ? '#000' : '#fff',
                          border: skill.color === '#F7DF1E' ? '1px solid #000' : 'none'
                        }}
                      >
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className="me-1" 
                          style={{ color: skill.color === '#F7DF1E' ? '#000' : '#fff' }}
                        />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="skills-section">
                  <h6 className="skill-category">
                    <FontAwesomeIcon icon={faBriefcase} className="me-1" />
                    Soft Skills
                  </h6>
                  <div className="skill-tags">
                    {skillsData.softSkills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        className="skill-badge"
                        style={{ 
                          backgroundColor: skill.color,
                          color: skill.color === '#F7DF1E' ? '#000' : '#fff',
                          border: skill.color === '#F7DF1E' ? '1px solid #000' : 'none'
                        }}
                      >
                        <FontAwesomeIcon 
                          icon={skill.icon} 
                          className="me-1" 
                          style={{ color: skill.color === '#F7DF1E' ? '#000' : '#fff' }}
                        />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="mb-4">
          <Col>
            <Card className="about-card experience-card">
              <Card.Body>
                <Card.Title className="section-title">
                  <FontAwesomeIcon icon={faBriefcase} className="me-2" />
                  Professional Experience
                </Card.Title>
                <div className="timeline">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4 className="job-title">{exp.title}</h4>
                        <div className="job-meta">
                          <span className="company">
                            <FontAwesomeIcon icon={faBriefcase} className="me-1" />
                            {exp.company}
                          </span>
                          <span className="period">
                            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                            {exp.period}
                          </span>
                          <span className="location">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                            {exp.location}
                          </span>
                        </div>
                        <p className="job-description">{exp.description}</p>
                        <div className="technologies">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              className="tech-badge"
                              style={{ 
                                backgroundColor: tech.color,
                                color: tech.color === '#F7DF1E' ? '#000' : '#fff',
                                border: tech.color === '#F7DF1E' ? '1px solid #000' : 'none'
                              }}
                            >
                              <FontAwesomeIcon 
                                icon={tech.icon} 
                                className="me-1" 
                                style={{ color: tech.color === '#F7DF1E' ? '#000' : '#fff' }}
                              />
                              {tech.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Education Section */}
        <Row className="mb-4">
          <Col>
            <Card className="about-card education-card">
              <Card.Body>
                <Card.Title className="section-title">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  Education
                </Card.Title>
                <div className="timeline">
                  {educationData.map((edu, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker education-marker"></div>
                      <div className="timeline-content">
                        <h4 className="degree-title">{edu.degree}</h4>
                        <div className="education-meta">
                          <span className="institution">
                            <FontAwesomeIcon icon={faGraduationCap} className="me-1" />
                            {edu.institution}
                          </span>
                          <span className="period">
                            <FontAwesomeIcon icon={faCalendarAlt} className="me-1" />
                            {edu.period}
                          </span>
                          <span className="location">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                            {edu.location}
                          </span>
                        </div>
                        <p className="education-description">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Honors & Awards Section */}
        <Row className="mb-4">
          <Col>
            <Card className="about-card awards-card">
              <Card.Body>
                <Card.Title className="section-title">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  Honors & Awards
                </Card.Title>
                <div className="awards-list">
                  <div className="award-item">
                    <h5 className="award-title">Best in Marketing and Presentation</h5>
                    <p className="award-issuer">University of Wollongong (UOW), Australia</p>
                    <p className="award-description">Awarded for outstanding final year project presentation in June 2022.</p>
                  </div>
                  <div className="award-item">
                    <h5 className="award-title">Merit Awards</h5>
                    <p className="award-issuer">INTI International College Subang</p>
                    <p className="award-description">Outstanding scholastic achievements in Bachelor of Computer Science 3+0 Collaboration with UOW, Australia - July 2019, July 2020, and February 2021.</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Info Section */}
        <Row className="mb-4">
          <Col>
            <Card className="about-card info-card">
              <Card.Body className="text-center">
                <h4>Interested in Working Together?</h4>
                <p className="info-text">
                  I'm always open to discussing new opportunities and interesting projects. 
                  Feel free to reach out if you'd like to collaborate!
                </p>
                <div className="info-actions">
                  <Button
                    href="/contact"
                    variant="outline-primary"
                    size="lg"
                    className="me-3"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    Get In Touch
                  </Button>
                  <Button
                    href="/projects"
                    variant="primary"
                    size="lg"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                    View Projects
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
