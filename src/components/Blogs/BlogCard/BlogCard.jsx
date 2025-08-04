import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const BlogCard = (props) => {
    const { title, previewText, image, liveLink } = props.data;

    return (
        <Col xs={12} sm={6} lg={4} xl={3} className="mb-4">
            <Card className="blog-card h-100 shadow-sm">
                <div className="card-image-container">
                    <Card.Img 
                        variant="top" 
                        src={image} 
                        className="blog-image"
                        alt={`${title} preview`}
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
                                <FontAwesomeIcon icon={faBookOpen} className="me-1" />
                                Read Article
                            </Button>
                        </div>
                    </div>
                </div>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="blog-title">
                        <h5 className="mb-2">{title}</h5>
                    </Card.Title>
                    <Card.Text className="blog-description flex-grow-1">
                        {previewText}
                    </Card.Text>
                    <div className="blog-links mt-auto">
                        <Button 
                            href={liveLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline-primary"
                            size="sm"
                            className="w-100"
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" />
                            Read Full Article
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogCard;