import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const MyNavbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMenuOpen) setMenuOpen(false);
    };

    return (
        <Navbar 
            expanded={isMenuOpen} 
            onToggle={handleToggle}
            expand="lg"
            className={`position-absolute top-0 w-100 z-3 py-2 ${isMenuOpen ? 'menu-open-bg' : ''}`}
        >
            <Container fluid className="px-3 px-lg-5 d-flex justify-content-between align-items-center">
                {/* Logo with a specific class for CSS control */}
                <Navbar.Brand
                    href="/" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        window.history.pushState("", "", "/");
                        if (isMenuOpen) setMenuOpen(false);
                    }}
                    className="me-0"
                >
                    <img
                        src="/Asian-pumps-logo.png"
                        alt="Asian Pumps"
                        className="nav-logo-img" 
                    />
                </Navbar.Brand>

                {/* This button will now stay on the same line as the logo */}
                <Navbar.Toggle aria-controls="main-navbar" className="border-0 shadow-none" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="mx-auto text-center py-4 py-lg-0">
                        {['about', 'products', 'collaboration', 'clients', 'contact'].map((item) => (
                            <Nav.Link 
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="mx-3 text-uppercase nav-link-custom"
                            >
                                {item}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <Nav className="social-icons-container d-flex flex-row justify-content-center align-items-center">
                        <Nav.Link href="https://facebook.com" target="_blank" className="px-2 text-primary">
                            <i className="bi bi-facebook fs-5"></i>
                        </Nav.Link>
                        <Nav.Link href="https://wa.me/923280922229" target="_blank" className="px-2 text-success">
                            <i className="bi bi-whatsapp fs-5"></i>
                        </Nav.Link>
                        <Nav.Link href="tel:+924237212111" className="px-2 text-dark">
                            <i className="bi bi-telephone fs-5"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;