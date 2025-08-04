import './Project.css';
import React from 'react';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard/ProjectCard.jsx';
import { projectData } from '../../data/projectData.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer.jsx';

const Projects = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <div className="projects-wrapper">
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

                <Container fluid className="projects-content py-5">
                    <Row className="mb-4">
                        <Col>
                            <div className="text-center">
                                <h1 className="projects-title mb-3">My Projects</h1>
                                <p className="projects-subtitle text-muted">
                                    Here are some of the projects I've worked on. Each project showcases different skills and technologies.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="g-4">
                        {projectData.map(data => (
                            <ProjectCard key={data.sl} data={data} />
                        ))}
                    </Row>
                    
                    <Row className="mt-5">
                        <Col className="text-center">
                            <div className="github-section">
                                <a
                                    href="https://github.com/mohammedazizul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-project"
                                >
                                    <FontAwesomeIcon icon={faGithubSquare} className="me-2" />
                                    View More Projects on GitHub
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Projects;