import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Modal, Button, Table, Image } from 'react-bootstrap';
import pump from '/src/assets/submerisble pump.jpeg';
import solar from '/src/assets/solar water pump.jpg';
import turbine from '/src/assets/Turbine.jpg';
import industry from '/src/assets/industry.jpeg';
import Bore from '/src/assets/Bore.jpg';
import Drill from '/src/assets/Drill.jpg';
import centrifugal from '/src/assets/centrifugal.jpg';
import residential from '/src/assets/residential.jpg';
import electrical from '/src/assets/electrical.jpg';
const Products = () => {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const cardsRef = useRef([]);

  const handleOpen = (item) => {
    setActiveItem(item);
    setShow(true);
  };

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => cardsRef.current.forEach(card => card && observer.unobserve(card));
  }, []);

 const items = [
    { 
      title: "Submersible Pumps", 
      type: "Product", 
      img: pump,
      specs: { head: "Up to 200m", flow: "15-300 m³/h", power: "5HP - 150HP", material: "SS 304/316" },
      desc: "Precision-engineered for deep-well extraction. Features sand-resistant technology and multi-stage impellers for maximum efficiency."
    },
    { 
      title: "Solar Water Systems", 
      type: "Service", 
      img: solar,
      specs: { panels: "Tier-1 Mono Perc", efficiency: "98% Inverter", tracking: "Manual/Auto", life: "25 Years" },
      desc: "High-efficiency sustainable energy solutions. We provide complete solar integration for agricultural tube wells and industrial water supply."
    },
    { 
      title: "Turbine Pumps", 
      type: "Product", 
      img: turbine,
      specs: { design: "Vertical Multi-Stage", cooling: "Water/Oil Cooled", duty: "Continuous S1", rpm: "1450" },
      desc: "The heavy-duty choice for large-scale irrigation. Our turbines offer unmatched durability and high-volume delivery."
    },
    { 
      title: "Industrial Piping", 
      type: "Product", 
      img: industry,
      specs: { materials: "MS, GI, uPVC, PPRC", sizes: "0.5\" to 24\" Diameter", pressure: "PN10, PN16, PN25", standards: "ASTM / DIN / BS" },
      desc: "High-grade piping solutions for industrial infrastructure. Includes MS/GI for strength and uPVC/PPRC for corrosion-resistance."
    },
    { 
      title: "Boring Systems", 
      type: "Service", 
      img: Bore,
      specs: { method: "Rotary Drilling", depth: "Up to 1500ft", casing: "UPVC/Steel", accuracy: "Geologically Surveyed" },
      desc: "Using advanced drilling rigs and 50+ years of mapping. We guarantee precision boring for stable and high-yield water veins."
    },
    {
      title: "Drilling Machinery", 
      type: "Product", 
      img: Drill,
      specs: { capacity: "2\" to 15\" Dia", maxDepth: "1000 Meters", engine: "Heavy Duty Diesel", mount: "Truck/Crawler" },
      desc: "Professional-grade borehole drilling machines capable of 2-inch to 15-inch diameter drilling. Built for high torque and rapid penetration in rocky and sandy terrains."
    },
    { 
      title: "Centrifugal Pumps", 
      type: "Product", 
      img: centrifugal,
      specs: { casing: "Cast Iron", suction: "End Suction", rpm: "2900", sealing: "Mechanical Seal" },
      desc: "Versatile pumping solutions for industrial liquid transfer, fire fighting, and high-rise building water management."
    },
    { 
      title: "Residential Solutions", 
      type: "Service", 
      img: residential,
      specs: { system: "Home Boosters", filtration: "Multi-Stage RO", smart: "Auto-Tank Level", pressure: "Constant Flow" },
      desc: "Tailored water solutions for modern homes. Includes high-pressure booster pumps and advanced purification systems for safe, consistent domestic water."
    },
    { 
      title: "Electrical Systems", 
      type: "Service", 
      img: electrical,
      specs: { control: "VFD/Soft Starter", protection: "Phase/Dry Run", panel: "IP65 Rated", automation: "IoT Ready" },
      desc: "Customized control panel manufacturing. We implement advanced electrical protections to ensure your pump motors operate safely."
    }
  ];

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#fdfdfd' }} id="products">
      <Container>
        <Row className="mb-5 justify-content-center text-center">
          <Col md={10}>
            <h6 className="fw-bold" style={{ color: '#0b4a99', letterSpacing: '3px' }}>OUR CAPABILITIES</h6>
            <h2 className="display-5 fw-bold text-dark mb-3">Engineered for  <span style={{ color: '#2fd838' }}>Performance</span></h2>
            <div style={{ height: '3px', backgroundColor: '#2fd838', width: '80px', margin: '0 auto' }}></div>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {items.map((item, index) => (
            <Col key={index} lg={4} md={6}>
              <div 
                ref={addToCardsRef}
                className="pre-animate industrial-card"
                onClick={() => handleOpen(item)}
              >
                <div className="card-bg" style={{ backgroundImage: `url(${item.img})` }}></div>
                <div className="card-overlay"></div>
                <div className="card-content">
                  <span className="type-tag">{item.type}</span>
                  <h3 className="text-white fw-bold mt-1">{item.title}</h3>
                  <div className="reveal-area">
                    <p className="text-white-50 small mt-3">{item.desc}</p>
                    <div className="text-white small fw-bold mt-2">
                      VIEW DATASHEET <i className="bi bi-chevron-right ms-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={() => setShow(false)} size="lg" centered className="industrial-modal">
          <Modal.Header closeButton className="border-0 px-4 pt-4">
            <Modal.Title className="fw-bold" style={{ color: '#0b4a99' }}>
               {activeItem?.title} <span className="text-muted fw-light">| Technical Details</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="px-4 pb-5">
            <Row className="align-items-center">
              <Col md={5} className="mb-4 mb-md-0">
                <Image src={activeItem?.img} fluid className="rounded shadow-sm" style={{ height: '350px', objectFit: 'cover', width: '100%' }} />
              </Col>
              <Col md={7}>
                <h6 className="fw-bold text-uppercase mb-3" style={{ color: '#33c4c4', letterSpacing: '1px' }}>Standard Specifications</h6>
                <Table responsive borderless className="small mb-4 border-top">
                  <tbody>
                    {activeItem && Object.entries(activeItem.specs).map(([key, value]) => (
                      <tr key={key} className="border-bottom">
                        <td className="fw-bold text-uppercase text-secondary py-2" style={{ fontSize: '0.65rem' }}>{key}</td>
                        <td className="py-2 text-dark fw-medium text-end">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <p className="text-muted small lh-lg mb-4">{activeItem?.desc}</p>
                
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </Container>
  );
};

export default Products;