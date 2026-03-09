import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Partner from '../assets/Chinease.jpg'; 

const Collaboration = () => {
  return (
    <Container fluid id="collaboration" className="collab-section">
      <Container className="py-5">
        
       
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h6 className="collab-top-label">Global Strategic Alliance</h6>
            <h2 className="collab-top-title">Direct Collaboration with <span style={{color:'#2fd838'}}>Chinese Manufacturers</span> </h2>
            <div className="collab-title-underline"></div>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Left Side: Photo */}
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="collab-img-wrapper">
              <img 
                src={Partner}
                alt="Partnership Meeting" 
                className="img-fluid collab-img shadow-lg"
              />
            </div>
          </Col>

          {/* Right Side: Content */}
          <Col lg={6} className="ps-lg-5">
            <p className="collab-description">
              We work directly with established manufacturers in China to ensure consistent quality, transparent sourcing, and competitive pricing.
            </p>

            <div className="collab-list">
              {[
                "Factory-level sourcing",
                "Strict quality control standards",
                "Certified machinery and genuine parts",
                "Cost-efficient procurement"
              ].map((item, index) => (
                <div key={index} className="collab-item">
                  <div className="collab-dot"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="collab-note-box">
              <p className="collab-note">
                No intermediaries. No unnecessary markups. Just reliable industrial solutions delivered with accountability.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Collaboration;