import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const MyNavbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (item) => {
        if (isMenuOpen) setMenuOpen(false);

        // 1. If 'blog' is clicked, use React Router to switch page
        if (item === 'blog') {
            navigate('/blog');
            return;
        }

        // 2. If clicking a section link while on /blog, return to home first
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(item);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return;
        }

        // 3. If already on the home page, scroll directly
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (isMenuOpen) setMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState("", "", "/");
        }
    };

    return (
        <>
            <div className="announcement-bar w-100 d-flex justify-content-center align-items-center bg-white">
                <img
                    className='announcement-img'
                    src="/turkey.png"
                    alt="Turkish Flag"
                />
                <span className="text-uppercase tracking-wider announcement-text">
                    Official Distributor of Premium Turkish Products
                </span>
            </div>

            <Navbar
                expanded={isMenuOpen}
                onToggle={handleToggle}
                expand="lg"
                className={`position-relative w-100 z-3 py-2 ${isMenuOpen ? 'menu-open-bg' : ''}`}
            >
                <Container fluid className="px-3 px-lg-5 d-flex justify-content-between align-items-center">
                    <Navbar.Brand
                        href="/"
                        onClick={handleLogoClick}
                        className="me-0"
                    >
                        <img
                            src="/Asian-pumps-logo.png"
                            alt="Asian Pumps"
                            className="nav-logo-img"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="main-navbar" className="border-0 shadow-none" />

                    <Navbar.Collapse id="main-navbar">
                        <Nav className="mx-auto text-center py-4 py-lg-0">
                            {['about', 'products', 'collaboration', 'clients', 'contact', 'blog'].map((item) => (
                                <Nav.Link
                                    key={item}
                                    onClick={() => handleNavClick(item)}
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
        </>
    );
};

export default MyNavbar;