import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Project.css';
import projectOne from "../../images/smartAssistanceHomePage.png";
import projectTwo from "../../images/leaguepediaHomePage.PNG";
import projectThree from "../../images/myEasyMartHomePage.png";

const Projects = () => {
    return (
        <div className="project-wrapper">
            <NavBar />
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active project-slide-div">
                        <img src={projectOne} className="img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block project-details-div">
                            <h5 className="project-name">Smart Assistance</h5>
                            <p></p>
                            <a 
                            href="https://smart-assistance-353ad.web.app/" 
                            className="btn-project-view" 
                            target="_blank"
                            rel="noreferrer"
                            >Click to Visit
                            </a>
                            <p></p>
                            <p>A full-stack responsive web application for service providing companies having individual panels for admin and user</p>
                        </div>
                    </div>

                    <div className="carousel-item project-slide-div">
                        <img src={projectTwo} className="img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block project-details-div">
                            <h5 className="project-name">Leaguepedia</h5>
                            <p></p>
                            <a 
                            href="https://objective-saha-e6d4fd.netlify.app/" 
                            target="_blank"
                            rel="noreferrer"
                            className="btn-project-view" 
                            >Click to Visit
                            </a>
                            <p></p>
                            <p>An API call-based fully responsive website where it collects several league data from the server and then displaying in cards</p>
                        </div>
                    </div>

                    <div className="carousel-item project-slide-div">
                        <img src={projectThree} className="img-fluid" alt="..."/>
                        <div className="carousel-caption d-none d-md-block project-details-div">
                            <h5 className="project-name">My Easy Mart</h5>
                            <p></p>
                            <a 
                            href="https://my-easy-mart.web.app/" 
                            className="btn-project-view"
                            target="_blank" 
                            rel="noreferrer"
                            >Click to Visit
                            </a>
                            <p></p>
                            <p>It’s an e-commerce website where the database is being handled with MongoDB and product images were stored in ImageBB</p>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev project-move-button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next project-move-button " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </div>
    );
};

export default Projects;