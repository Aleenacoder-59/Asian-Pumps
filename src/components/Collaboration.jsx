import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Partner from '../assets/trial 3.jpeg'; 

const Collaboration = () => {
  return (
    <Container fluid id="collaboration" className="collab-section">
      <Container className="py-5">
        
       
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h4 className="collab-top-label">Global Strategic Alliance</h4>
            <h2 className="collab-top-title">Imported Water Pumps Direct  <span style={{color:'#2fd838'}}>from Turkish Manufacturers</span> </h2>
            <div className="collab-title-underline"></div>
          </Col>
        </Row>

        <Row className="align-items-center">

          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="collab-img-wrapper">
              <img 
                src={Partner}
                alt="Partnership Meeting" 
                className="img-fluid collab-img shadow-lg"
              />
            </div>
          </Col>

        
          <Col lg={6} className="ps-lg-5">
            <p className="collab-description">
              Asian Pumps works directly with established manufacturers in Turkey to bring quality water pumps to Pakistan at competitive prices, with consistent quality and transparent sourcing.
            </p>

            <div className="collab-list">
              {[
                "Factory-direct sourcing of water pumps",
                "Strict quality control standards",
                "Certified machinery and genuine spare parts",
                "Affordable water pump prices in Pakistan"
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