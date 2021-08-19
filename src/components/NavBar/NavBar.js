import React from 'react';
import './NavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import maLogo from '../../images/favicon_io/android-chrome-192x192.png'
import { Link } from 'react-router-dom';

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
                        <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link href="/projects">PROJECTS</Nav.Link>
                        <Nav.Link href="/blogs">BLOGS</Nav.Link>
                        <Nav.Link href="/resume">RESUME</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;