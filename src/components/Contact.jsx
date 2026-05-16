import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaClock, FaGlobe, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Container fluid id="contact" className="contact-section py-5 ">
      <Container className="py-5">
        
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h6 className="text-uppercase fw-bold  mb-2" style={{ letterSpacing: '2px', color: '#0b4a99' }}>
              Contact Information
            </h6>
            <h1 className="display-5 fw-bold text-dark mb-3">
              Global Industrial  <span style={{color: '#2fd838'}}> Pump Solutions</span>
            </h1>
            <div className="collab-title-underline"></div>
            <p className="lead text-muted mx-auto mt-3" style={{ maxWidth: '700px' }}>
              Connect with our technical engineering team for equipment specifications, 
              industrial procurement inquiries, and international logistics support.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden">
              <Row className="g-0 h-100">
                <Col md={5} className="p-5 text-white d-flex flex-column justify-content-center" style={{backgroundColor:'#0b4a99'}} >
                  <h3 className="fw-bold mb-4">Corporate Headquarters</h3>
                  <div className="mb-4">
                    <p className="small text-uppercase text-white-50 mb-1">Registered Office</p>
                    <p className="mb-0">G3 G4 Zaman Plaza, Dil Muhammad Linked Brandreth Road, Lahore, Pakistan</p>
                  </div>
                  <div>
                    <p className="small text-uppercase text-white-50 mb-1">Connect on Social</p>
                    <a href="https://www.facebook.com/ASIANPUMPSPVTLTD/photos?_rdc=1&_rdr#" target="_blank" rel="noreferrer" className="text-white">
                      <FaFacebook size={30} />
                    </a>
                    <a href="https://wa.me/923280922229" target="_blank" rel="noreferrer" className="text-white ms-3">
                      <FaWhatsapp size={30} />
                    </a>
                    
                  </div>
                </Col>
                
                <Col md={7} className="p-5 bg-white">
  <h4 className="fw-bold mb-4 text-dark">Technical Support Channels</h4>
  
  {/* Added align-items-center to keep the row balanced */}
  <div className="d-flex align-items-center mb-4">
    <div className="contact-icon-box me-3 flex-shrink-0">
      <FaPhone className="text-success" />
    </div>
    <div>
      <h6 className="fw-bold mb-0">Direct Sales Line</h6>
      <p className="text-muted small mb-0">042-37232329 (Landline)</p>
    </div>
  </div>

  {/* Added align-items-center */}
  <div className="d-flex align-items-center mb-4">
    <div className="contact-icon-box me-3 flex-shrink-0">
      <FaWhatsapp className="text-success" />
    </div>
    <div>
      <h6 className="fw-bold mb-0">Official Whatsapp</h6>
      <p className="text-muted small mb-0">+92 328 0922229</p>
    </div>
  </div>

  <div className="d-flex align-items-center mb-4">
    <div className="contact-icon-box me-3 flex-shrink-0">
      <FaEnvelope className="text-success" />
    </div>
    <div>
      <h6 className="fw-bold mb-0">Official Email</h6>
      <p className="text-muted small mb-0">asianpumps1115pvtltd@gmail.com</p>
    </div>
  </div>
</Col>
              </Row>
            </Card>
          </Col>

          
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 p-5 h-100 bg-white">
              <h4 className="fw-bold mb-4 text-dark d-flex align-items-center">
                <FaClock className="me-2 text-success" size={20} /> Operational Hours
              </h4>
              <p className="text-muted small mb-4">
                Our technical team is available during the following hours (GMT +5) for equipment demonstrations and site visits.
              </p>
              
              <div className="schedule-list">
                <div className="d-flex justify-content-between mb-3 pb-2 border-bottom">
                  <span className="fw-semibold">Monday - Friday</span>
                  <span className="text-success fw-bold">9 AM - 9 PM</span>
                </div>
                <div className="d-flex justify-content-between mb-3 pb-2 border-bottom">
                  <span className="fw-semibold">Saturday</span>
                  <span className="text-success fw-bold">9 AM - 5 PM</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="fw-semibold text-muted">Sunday</span>
                  <span className="text-danger fw-bold italic">Closed</span>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <div className="alert alert-info border-0 rounded-3 small py-2">
                  <strong>Note:</strong> Standard Lunch Break observed daily between 1:00 PM - 2:00 PM.
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactPage;