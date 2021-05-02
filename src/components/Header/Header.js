import React from 'react';
import './Header.css';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Mohammed Azizul Hoque Sheikh</h1>
                {/* react-typed added  */}
                <Typed 
                    className="typed-text"
                    strings={["Web Developer","Programmer","Full Stack Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a 
                href="mailto:mohammedazizulhoquesheikh@gmail.com" 
                className="btn-main-offer" 
                >contact me</a>
            </div>
        </div>
    );
};

export default Header;