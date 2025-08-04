import React from 'react';
import { Card, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props) => {
    const { previewImage, prjName, liveLink, repoLink, details } = props.data;

    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="mb-4">
            <Card className="project-card h-100 shadow-sm">
                <div className="card-image-container">
                    <Card.Img 
                        variant="top" 
                        src={previewImage} 
                        className="project-image"
                        alt={`${prjName} preview`}
                    />
                    <div className="card-overlay">
                        <div className="overlay-buttons">
                            <Button 
                                href={liveLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-light"
                                size="sm"
                                className="overlay-btn"
                            >
                                <FontAwesomeIcon icon={faEye} className="me-1" />
                                Live Demo
                            </Button>
                            {repoLink && (
                                <Button 
                                    href={repoLink} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="outline-light"
                                    size="sm"
                                    className="overlay-btn"
                                >
                                    <FontAwesomeIcon icon={faCode} className="me-1" />
                                    Code
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="project-title">
                        <h5 className="mb-2">{prjName}</h5>
                    </Card.Title>
                    <Card.Text className="project-description flex-grow-1">
                        {details}
                    </Card.Text>
                    <div className="project-links mt-auto">
                        <Button 
                            href={liveLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" />
                            Live Demo
                        </Button>
                        {repoLink && (
                            <Button 
                                href={repoLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outline-secondary"
                                size="sm"
                            >
                                <FontAwesomeIcon icon={faCode} className="me-1" />
                                Source Code
                            </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProjectCard;