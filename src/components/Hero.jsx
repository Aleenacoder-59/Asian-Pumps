import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <section className="hero-section">
      
      <div className="hero-overlay"></div>

      <Container className="hero-content">
       
        <Row className="align-items-center d-flex flex-column flex-md-row">

        
          <Col xs={12} md={6} className="hero-right order-1 order-md-2 mb-4 mb-md-0">
            <Carousel fade controls={false} indicators={false} interval={3000}>
              <Carousel.Item>
                <img
                  src="/hassan.jpg"
                  alt="Owner"
                  className="hero-image d-block w-100 rounded shadow-lg"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="/china.jpg"
                  alt="Collaboration with Chinease vendors"
                  className="hero-image d-block w-100 rounded shadow-lg"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="/Solar system.jpg"
                  alt="Solar Plates"
                  className="hero-image d-block w-100 rounded shadow-lg"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="/pumps.jpg"
                  alt="Water Pumps"
                  className="hero-image d-block w-100 rounded shadow-lg"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col xs={12} md={6} className="hero-left text-start order-2 order-md-1">
            <h1 className="hero-title fw-bold">
              
<span style={{ color: '#0b4a99' }}>Asian</span>{" "}
<span style={{ color: '#71ca28' }}>Pumps</span>
            </h1>
            
            <h2 className="text-black h5 mt-2"> 
              Leading Water Pumping & Engineering Solutions 
            </h2>

            <p className="hero-description text-black">
              Delivering innovative and high-quality water pumping solutions
              across Pakistan since 1974. Serving industrial, commercial, and
              residential sectors with precision and reliability.
            </p>

            <div className="hero-tags text-black">
              <span>Industrial Pumps</span>
              <span>Irrigation Systems</span>
              <span>Water Engineering</span>
              <span>Residential Solutions</span>
                        <span>Centrifugal Pumps</span>
              <span>Turbine Pumps</span>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;