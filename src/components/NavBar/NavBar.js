import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import maLogo from '../../images/favicon_io/android-chrome-192x192.png';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img className="logoImage" src={maLogo} alt="ma logo"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="/home" className="nav-links">HOME</Nav.Link>
                        <Nav.Link href="/projects" className="nav-links">PROJECTS</Nav.Link>
                        <Nav.Link href="/blogs" className="nav-links">BLOGS</Nav.Link>
                        <Nav.Link href="/resume" className="nav-links">RESUME</Nav.Link>
                        <Nav.Link href="/contact" className="nav-links">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;