import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Support = () => {
  const whatsappNumber = "923280922229"; // Updated with your provided number
  const message = encodeURIComponent("Hello! I am interested in your comprehensive service and support.");

  return (
    <>
      

      <Container fluid className="py-5 bg-white">
        <Container className="py-5">
          <Row className="align-items-center">
            
            <Col lg={7} className="pe-lg-5">
              <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#0b4a99', letterSpacing: '1px', fontSize: '0.85rem' }}>
                24/7 Customer Support
              </h6>
              
              <h2 className="display-5 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                Repair <span style={{ color: '#2fd838' }}> & Installation</span> <br />
              
              </h2>

              <div className="text-secondary mb-4" style={{ fontSize: '1.05rem' }}>
                <p className="mb-3">We offer prompt installations of new pumping systems at your site.</p>
                <p className="mb-3">Our team provides a complete guarantee and after-sales maintenance services 24/7 via qualified and trained technicians.</p>
                <p className="mb-4">We ensure complete warranty and technical support after sales as mentioned in the work order.</p>
              </div>

              <Button 
                as="a"
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                size="lg" 
                className="px-5 py-3 rounded-pill fw-bold custom-btn shadow-sm"
              >
                Contact Service Team
              </Button>
            </Col>

            
            <Col lg={5} className="mt-5 mt-lg-0">
              <div className="position-relative">
            

          
                <div className="rounded-5 overflow-hidden shadow-lg position-relative" style={{ zIndex: 1 }}>
                  <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800" 
                    alt="Technical Service" 
                    className="img-fluid hover-zoom"
                    style={{ minHeight: '450px', objectFit: 'cover' }}
                  />
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Support;