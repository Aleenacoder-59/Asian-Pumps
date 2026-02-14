import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    

    return (
        <footer 
            className="text-white py-3 "
            style={{ 
                backgroundColor: '#1e2f3aff' 
            }}
        >
            <Container fluid>
                <Row className="text-center text-md-start align-items-center">
                  
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                            
                            <span 
                                className=" rounded-3  p-1 me-2" 
                                style={{ 
                                    backgroundColor: '#33c4c4ff', 
                                    border: ' 2px solid #33c4c4ff'
                                }}
                            >
                                <i className="bi bi-code-slash text-white"></i>
                            </span>
                            <span className="fw-bold" style={{ color: '#ffffffff' }}>
                                Aleena_codes
                            </span>
                        </div>
                    </Col>

                   
                    <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <p className="text-center mb-0" style={{ color: '#E0D8D6' }}>
  <i className="bi bi-lightbulb-fill me-1" style={{ color: '#fff349ff' }}></i> Innovatively designed & developed by Aleena.
</p>
                    </Col>
                    
                    
                    <Col xs={12} md={4} className="text-center text-md-end">
                        <p className="mb-0" style={{ color: '#E0D8D6' }}>
                            &copy; 2025 Aleena_codes. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;