
import { Container, Row, Col } from 'react-bootstrap';

import Pepsi from '../assets/pepsi.png';
import Wapda from '../assets/wapda.png';
import Unicef from '../assets/unicef.png';
import Usaid from '../assets/usaid.png';
import SuiGas from '../assets/sui gas.png'; 
import PunjabGovt from '../assets/punjab govt.png';
import Savour from '../assets/savour.png';
import StyleTextile from '../assets/style textile.jpg'; 
import Zrk from '../assets/zrk.png';

const clientList = [
  { name: 'Pepsi', logo: Pepsi },
  { name: 'WAPDA', logo: Wapda },
  { name: 'UNICEF', logo: Unicef },
  { name: 'USAID', logo: Usaid },
  { name: 'SNGPL', logo: SuiGas },
  { name: 'Punjab Govt', logo: PunjabGovt },
  { name: 'Savour Foods', logo: Savour },
  { name: 'Style Textile', logo: StyleTextile },
  { name: 'ZRK Group', logo: Zrk },
];

const Clients = () => {
  return (
    <Container fluid id="clients" className="px-4 py-5 d-flex flex-column align-items-center justify-content-start client-section">
  
      <Row className="justify-content-center mb-4 text-white">
        <Col xs={12} className="text-center">
          <h6 className="collab-top-label text-uppercase mb-2">Our Portfolio</h6>
          <h1 className="text-black display-5 fw-bold">
            Trusted <span style={{ color: '#2fd838' }}> & Valued Clients</span>
          </h1>
          <div className="collab-title-underline mb-3"></div>
          <p className='text-center text-secondary mt-2'>
            Serving a diverse range of International, Commercial, and Domestic sectors.
          </p>
        </Col>
      </Row>

      <Row className="w-100 d-flex justify-content-center mt-5">
        <Col xs={12}>
          <div className="client-reel-wrapper">
            <div className="client-reel-track">
              {[...clientList, ...clientList].map((client, index) => (
                <div className="client-item mx-5" key={index}>
                  <div className="client-logo-container">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="client-logo-img" 
                    />
                    <span className="client-label d-block mt-3">{client.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Clients;