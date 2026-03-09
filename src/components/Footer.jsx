import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
return (
<footer
className="py-4 footer"

>
<Container fluid className="px-lg-5">
<Row className="align-items-center">

                <Col xs={12} md={4} className="text-center text-md-start mb-3 mb-md-0">
                    <img
                        src="/Asian-pumps-logo.png"
                        alt="Asian Pumps"
                        style={{ height: '45px', width: 'auto' }}
                    />
                </Col>

                {/* MIDDLE: Copyright */}
                <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                    <p className="mb-0 text-muted" >
                        &copy; {new Date().getFullYear()} <strong>Asian Pumps</strong>. All rights reserved.
                    </p>
                </Col>

              
                <Col xs={12} md={4} className="text-center text-md-end">
                    <p className="mb-0 text-muted small" style={{ fontSize: '0.8rem' }}>
                        Designed and Developed by 
                        <span className="fw-bold ms-1" style={{ color: '#33c4c4' }}>
                            Aleena_codes
                        </span>
                    </p>
                </Col>

            </Row>
        </Container>
    </footer>
);
};

export default Footer;