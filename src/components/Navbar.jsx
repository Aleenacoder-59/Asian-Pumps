import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const MyNavbar = ({ }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

   
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (isMenuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <Navbar 
            expanded={isMenuOpen} 
            onToggle={handleToggle}
            expand="lg"
            className="navbar-dark z-3 text-white position-absolute top-0 w-100"
            style={{
                backgroundColor: 'transparent',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
            }}
        >
            <Container fluid className="bg-transparent">
                {/* Brand */}
                <Navbar.Brand
                    href="#"
                    className="d-flex align-items-center"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}
                >
                    <span 
                        className="rounded-4 p-1 me-1"
                        style={{
                            backgroundColor: '#33c4c4ff',
                            border: '1px solid #33c4c4ff',
                        }}
                    >
                        <i className="bi bi-code-slash text-white p-1 m-1"></i>
                    </span>
                    <span
                        className="fw-bold"
                        style={{
                            color: '#d1c8c8ff',
                            fontSize: '1.25rem',
                        }}
                    >
                        Aleena_codes
                    </span>
                </Navbar.Brand>
               
                {isMenuOpen && <div className="blur-overlay" />}
                
                <Navbar.Toggle aria-controls="main-navbar" />
                {isMenuOpen && (
                    <button
                        className="btn btn-link text-white position-absolute end-0 top-0 mt-3 me-3 d-lg-none"
                        style={{ fontSize: '1rem', zIndex: 1051 }}
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                )}
                
                <Navbar.Collapse id="main-navbar" className='z-3'>
                    <div className="w-100 d-lg-flex align-items-center justify-content-between">
                        <Nav className="mx-auto my-2 my-lg-0 justify-content-center flex-grow-1">
                            <Nav.Link 
                                onClick={() => scrollToSection('about')} 
                                className="mx-2 nav-link-hover text-white text-opacity-75 fw-bold"
                            >
                                About
                            </Nav.Link>
                            <Nav.Link 
                                onClick={() => scrollToSection('skills')} 
                                className="mx-2 nav-link-hover text-white text-opacity-75 fw-bold"
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link 
                                onClick={() => scrollToSection('projects')} 
                                className="mx-2 nav-link-hover text-white text-opacity-75 fw-bold"
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link 
                                onClick={() => scrollToSection('contact')} 
                                className="mx-2 nav-link-hover text-white text-opacity-75 fw-bold"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>

                        <Nav className="d-flex align-items-center justify-content-center mt-3 mt-lg-0">
                            <Nav.Link
                                href="https://github.com/Aleenacoder-59"
                                target="_blank"
                                className="opacity-75 me-2"
                            >
                                <i className="bi bi-github fs-5"></i>
                            </Nav.Link>
                            <Nav.Link
                                href="https://www.linkedin.com/in/aleena-atiq-a7274a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                className="text-opacity-75 me-3"
                            >
                                <i className="bi bi-linkedin fs-5"></i>
                            </Nav.Link>
                            <Button
                                onClick={() => scrollToSection('contact')}
                                variant="outline-light"
                                className="fw-bold px-2 py-2 rounded-2 d-flex align-items-center contact-btn"
                                style={{
                                    borderColor: '#33c4c4ff',
                                    color: '#fff',
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <i className="bi bi-envelope me-2"></i>
                                Contact Me
                            </Button>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;