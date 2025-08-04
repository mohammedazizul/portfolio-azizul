import './Blogs.css';
import React from 'react';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from './BlogCard/BlogCard.jsx';
import blog101 from '../../images/blog101.jpg';
import blog102 from '../../images/blog102.jpg';
import blog103 from '../../images/blog103.jpg';
import blog104 from '../../images/blog104.jpg';
import blog105 from '../../images/blog105.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer.jsx';

// data to preview blogs info
const blogData = [
    {
        blogSl: 101,
        title: "JavaScript splice() basic",
        previewText: "The array is a very big and vast knowledge . . . ",
        image: blog101,
        liveLink: "https://mohammedazizul.medium.com/javascript-splice-basic-58a3a2151e4c"
    },
    {
        blogSl: 102,
        title: "Some Basics of JavaScript",
        previewText: "There are a lot of things to discuss in JavaScript but . . . ", 
        image: blog102,
        liveLink: "https://mohammedazizul.medium.com/some-basics-of-javascript-b5adbee0f418"
    },
    {
        blogSl: 103,
        title: "React.js In My View",
        previewText: "There are some very fundamental topics of react.js . . . ",
        image: blog103,
        liveLink: "https://mohammedazizul.medium.com/react-js-in-my-view-e2745b4b91b4"
    },
    {
        blogSl: 104,
        title: "Some concepts of JavaScript",
        previewText: "undefined, null, scope, let vs. var vs. const . . . ",
        image: blog104,
        liveLink: "https://mohammedazizul.medium.com/some-concepts-of-javascript-baab52ac00fc"
    },
    {
        blogSl: 105,
        title: "Some Methods of JavaScript String",
        previewText: "very basic discussion on concat(), toLowerCase() . . . ",
        image: blog105,
        liveLink: "https://mohammedazizul.medium.com/some-methods-of-javascript-string-ed22a2c9168b"
    }
];

const Blogs = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <div className="blog-wrapper">
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

                <Container fluid className="blogs-content py-5">
                    <Row className="mb-4">
                        <Col>
                            <div className="text-center">
                                <h1 className="blogs-title mb-3">My Blog Articles</h1>
                                <p className="blogs-subtitle text-muted">
                                    Sharing my knowledge and insights about web development, JavaScript, React, and programming concepts.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="g-4">
                        {blogData.map(data => (
                            <BlogCard data={data} key={data.blogSl} />
                        ))}
                    </Row>
                    
                    <Row className="mt-5">
                        <Col className="text-center">
                            <div className="medium-section">
                                <a
                                    href="https://mohammedazizul.medium.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-blog"
                                >
                                    <FontAwesomeIcon icon={faMedium} className="me-2" />
                                    View All Articles on Medium
                                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
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

export default Blogs;