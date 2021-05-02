import React from 'react';
import './NavBar.css'
import maLogo from '../../images/favicon_io/android-chrome-192x192.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <img className="logoImage" src={maLogo} alt="ma logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} color="white"/>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <a className="nav-link active navLink" aria-current="page" href="">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navLink" href="">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navLink" href="">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navLink" href="">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navLink" href="">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navLink" href="">Contacts</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;