import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const About = () => {
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef([]);
  
  
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

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
//  { It is a Frontend Behavior Api}
    const observer = new IntersectionObserver(observerCallback, observerOptions);   
    if (headerRef.current) observer.observe(headerRef.current);
    if (leftColRef.current) observer.observe(leftColRef.current);
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (leftColRef.current) observer.unobserve(leftColRef.current);
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <Container
      fluid
      id="about"
      className="px-4 py-5 about-section"
      style={{
        background: "linear-gradient(to right, #000000, #091b35)",
        minHeight: "100vh"
      }}
    >
     
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center mb-4">
          <div ref={headerRef} className="pre-animate">
            <h1 className="text-white display-5 fw-bold">
              About <span style={{ color: '	#33c4c4ff' }}>Me</span>
            </h1>
            <p className="text-secondary fs-5 mt-3">
              Turning imaginative concepts into powerful web applications.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={10}>
          <Row>
            
            <Col md={6} className="mb-5">
              <div ref={leftColRef} className="pre-animate">
                <Card className="h-100 border-0 bg-transparent text-white">
                  <Card.Body>
                    <Card.Title as="h3" className="mb-2 text-white">
                       Where Code Meets Creativity 
                    </Card.Title>
                    <Card.Text className="fs-6 lh-lg text-secondary">
                      Self-taught frontend developer with one year of dedicated experience building modern web applications using React.js. I specialize in creating responsive, user-focused interfaces while maintaining clean, scalable code.
                    </Card.Text>
                    <Card.Text className="fs-6 lh-lg text-secondary">
                      My learning journey has been project-driven, allowing me to explore everything from component architecture to performance optimization. I believe great development combines technical skill with creative problem-solving, and I'm ready to bring this mindset to collaborative development environments.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            
            <Col md={6}>
              <Row className="g-4 mt-2">
              
                <Col sm={6} className="mb-3">
                  <div ref={addToCardsRef} className="pre-animate">
                    <Card className="h-100 border-secondary bg-transparent rounded-0">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">
                          <div className="rounded-2 opacity-75 d-flex align-items-center justify-content-center me-3"
                            style={{ width: '40px', height: '40px', background: '	#33c4c4ff' }}>
                            <i className="bi bi-code-slash text-white fs-5"></i>
                          </div>
                          <Card.Title as="h5" className="text-white mb-0">Clean Code</Card.Title>
                        </div>
                        <Card.Text className="text-secondary mb-0">
                          Writing maintainable, scalable code following best practices
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>

               
                <Col sm={6} className="mb-3">
                  <div ref={addToCardsRef} className="pre-animate">
                    <Card className="h-100 border-secondary bg-transparent rounded-0">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-3">
                          <div className="rounded-2 opacity-75 d-flex align-items-center justify-content-center me-3"
                            style={{ width: '40px', height: '40px', background: '	#33c4c4ff' }}>
                            <i className="bi bi-lightning-charge text-white fs-5"></i>
                          </div>
                          <Card.Title as="h5" className="text-white mb-0">Performance</Card.Title>
                        </div>
                        <Card.Text className="text-secondary mb-0">
                          Optimizing applications for speed and user experience
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>

                {/* Years Experience Card */}
                <Col sm={6} className="mb-3">
                  <div ref={addToCardsRef} className="pre-animate">
                    <Card className="h-100 border-secondary bg-transparent rounded-0">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <h2 className="fw-bold display-4 mb-0" style={{ color: '	#33c4c4ff' }}>1+</h2>
                        <p className="text-secondary mb-0 mt-2">Years Experience</p>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>

          
                <Col sm={6} className="mb-3">
                  <div ref={addToCardsRef} className="pre-animate">
                    <Card className="h-100 border-secondary bg-transparent rounded-0">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <h2 className="fw-bold display-4 mb-0" style={{ color: '	#33c4c4ff' }}>5+</h2>
                        <p className="text-secondary mb-0 mt-2">Projects Completed</p>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;