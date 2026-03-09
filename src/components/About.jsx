import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import owner from '../assets/owner.jpg'; 

const About = () => {
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const imageColRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);   
    if (headerRef.current) observer.observe(headerRef.current);
    if (leftColRef.current) observer.observe(leftColRef.current);
    if (imageColRef.current) observer.observe(imageColRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (leftColRef.current) observer.unobserve(leftColRef.current);
      if (imageColRef.current) observer.unobserve(imageColRef.current);
    };
  }, []);

  return (
    <Container
      fluid
      id="about"
      className="px-4 py-5 about-section"
      style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}
    >
      
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center mb-4">
          <div ref={headerRef} className="pre-animate" style={{ transition: 'all 0.8s ease' }}>
            <h6 className="text-uppercase fw-bold mb-2" style={{ color: '#0b4a99', letterSpacing: '2px', fontFamily: 'Inter, sans-serif' }}>
             About US
            </h6>
            <h1 className="text-black display-5 fw-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Legacy of <span style={{ color: '#2fd838' }}>Excellence</span> 
            </h1>
            <div 
              className="mx-auto mt-3" 
              style={{ width: '60px', height: '4px', backgroundColor: '#2fd838' }}
            ></div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center">
        <Col lg={10}>
          <Row className="align-items-center">
           
            <Col md={6} className="mb-5 mb-md-0">
              <div ref={leftColRef} className="pre-animate" style={{ transition: 'all 0.8s ease' }}>
                <h2 className="fw-bold mb-4" style={{ color: '#0b4a99', fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem' }}>
                  Where Engineering <br/> <span style={{ color: '#2fd838' }}>Meets Innovation</span> 
                </h2>
                <p className="fs-6 lh-lg text-dark opacity-75" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Asian Pumps Pvt. Ltd. is an esteemed pioneer in the water boring industry of Pakistan. 
                  Holding its position as a top-tier brand since its establishment in 1974, we have built 
                  a formidable reputation for delivering cutting-edge water pumping solutions that 
                  cater to agricultural, industrial, and residential sectors.
                </p>
                <p className="fs-6 lh-lg text-dark opacity-75" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Under the visionary leadership of our CEO, <span className="fw-bold text-black">Hassan Ilyas</span>, 
                  the company has risen to the pinnacle of the industry. We pride ourselves on a highly 
                  skilled workforce, including a fully equipped mechanical team and engineers dedicated 
                  to unparalleled efficiency and precision.
                </p>
                
                {/* Years of Experience Badge */}
                <div className="d-flex align-items-center mt-4">
                    <div className="me-3 display-4 fw-bold" style={{ color: '#2fd838', fontFamily: 'Poppins, sans-serif' }}>50+</div>
                    <div className="text-uppercase fw-bold lh-1 text-dark" style={{ fontSize: '0.85rem', letterSpacing: '1px', fontFamily: 'Inter, sans-serif' }}>
                        Years of <br/> Industrial Experience
                    </div>
                </div>
              </div>
            </Col>

        
            <Col md={6} className="text-center">
              <div ref={imageColRef} className="pre-animate" style={{ transition: 'all 1s ease-out' }}>
                <div className="position-relative d-inline-block">
   
                  <div 
                    className="position-absolute About-text"
                  ></div>
                
                  <Image 
                    src={owner} 
                    alt="Hassan Ilyas - CEO Asian Pumps"
                    fluid
                    className="position-relative z-1 About-img"
                   
                  />
                  
                 
                
                </div>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;