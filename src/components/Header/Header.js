import React from 'react';
import './Header.css';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>web development and websites promotions</h1>
                {/* react-typed added  */}
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Problem Solving"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="/#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    );
};

export default Header;