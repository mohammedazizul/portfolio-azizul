import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Project.css';
import projectOne from "../../images/smartAssistanceHomePage.png";
import projectTwo from "../../images/leaguepediaHomePage.PNG";
import projectThree from "../../images/myEasyMartHomePage.png";
import projectFour from "../../images/myTodo.png";
import { Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard/ProjectCard';

const projectData = [
    {
        sl: 1,
        previewImage: projectOne,
        prjName: "Smart Assistance",
        liveLink: "https://smart-assistance-353ad.web.app/",
        repoLink: "",
        details: "A full-stack responsive web application for service providing companies having individual panels for admin and user"
    },
    {
        sl: 2,
        previewImage: projectTwo,
        prjName: "Leaguepedia",
        liveLink: "https://objective-saha-e6d4fd.netlify.app/",
        repoLink: "",
        details: "An API call-based fully responsive website where it collects several league data from the server and then displaying in cards"
    },
    {
        sl: 3,
        previewImage: projectThree,
        prjName: "My Easy Mart",
        liveLink: "https://my-easy-mart.web.app/",
        repoLink: "",
        details: "It’s an e-commerce website where the database is being handled with MongoDB and product images were stored in ImageBB"
    },
    {
        sl: 4,
        previewImage: projectFour,
        prjName: "my-todo",
        liveLink: "https://my-todo-app-redux.netlify.app/",
        repoLink: "",
        details: "it's a react application using redux toolkit to organize the daily to-do"
    }

];

const Projects = () => {

    return (
        <div>
            <NavBar />
            <p></p>
            <Row xs={1} md={2} className="g-4">
                {
                    projectData.map(data => <ProjectCard key={data.sl} data={data} />)
                }
            </Row>
        </div>
    );
};

export default Projects;