import './NavBar.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faBlog, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import maLogo from '../../images/favicon_io/android-chrome-192x192.png';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const navItems = [
        { path: '/home', label: 'Home', icon: faHome },
        { path: '/projects', label: 'Projects', icon: faCode },
        { path: '/blogs', label: 'Blogs', icon: faBlog },
        { path: '/about', label: 'About', icon: faFileAlt },
        { path: '/contact', label: 'Contact', icon: faEnvelope }
    ];

    const isActive = (path) => {
        if (path === '/home' && location.pathname === '/') return true;
        return location.pathname === path;
    };

    return (
        <Navbar 
            collapseOnSelect 
            expand="lg" 
            className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}
            fixed="top"
        >
            <Container>
                <Navbar.Brand className="navbar-brand">
                    <Link to="/" className="brand-link">
                        {/* <img className="logo-image" src={maLogo} alt="Azizul's Portfolio Logo"/> */}
                        <span className="brand-text">Azizul Hoque</span>
                    </Link>
                </Navbar.Brand>
                
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav" 
                    className="navbar-toggler"
                />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {navItems.map((item, index) => (
                            <Nav.Link
                                key={index}
                                as={Link}
                                to={item.path}
                                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                            >
                                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                                <span className="nav-text">{item.label}</span>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;