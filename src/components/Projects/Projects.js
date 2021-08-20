import './Project.css';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard/ProjectCard';
import { projectData } from '../../data/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {

    return (
        <>
            <NavBar />
            <p></p>
            <div className="projects-wrapper">
                <Row xs={1} md={2} className="g-4">
                    {/* loading project cards */}
                    {
                        projectData.map(
                            data => <ProjectCard key={data.sl} data={data} />
                            )
                    }
                </Row>
                {/* button to visit github profile */}
                <div className="blog-info">
                    <a 
                    href="https://github.com/mohammedazizul"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project" 
                    >
                        click to visit profile in <FontAwesomeIcon icon={faGithubSquare} size="lg" color="steelblue" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Projects;