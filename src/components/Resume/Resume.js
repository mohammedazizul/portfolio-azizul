import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
    return (
        <div>
            <NavBar/>
            <div className="resume-wrapper">
                <div className="resume-info">
                    {/* link to download resume file  */}
                    <a 
                    href="https://drive.google.com/file/d/1riLhRdiXC976MdaJ2uQ5NGgmOXM92xWI/view?usp=sharing" 
                    download 
                    className="btn-resume-download" 
                    >Click to Download my Resume &nbsp;
                    <FontAwesomeIcon icon={faFileDownload} />
                    </a>

                    <a 
                    href="/home"
                    className="btn-resume-download" 
                    >Back to Home
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default Resume;