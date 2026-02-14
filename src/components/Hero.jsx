import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Hero = () => {
    return (
        <section
            className="d-flex align-items-start justify-content-center text-center text-white vh-100 position-relative"
        >
            <div className='position-absolute top-0 start-0 w-100 h-100'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            ></div>
            <Container className="position-relative z-1">
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8} className="pt-5">
                        
                        <div
                            className="d-inline-block mb-4 mt-4 px-3 py-2 rounded-4 bg-dark bg-opacity-50  shadow"
                            style={{
                                fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
                                letterSpacing: '0.5px',
                                backdropFilter: 'blur(4px)' 
                            }}
                        >
                            <span style={{ color: '#7639d8ff' }}>const</span>{' '}
                            <span style={{ color: '#ffffffff' }}>developer</span>{' '}
                            <span style={{ color: '#46b5d6ff' }}>=</span>{' '}
                            <span style={{ color: '	#33c4c4ff' }}>"Aleena_codes"</span>
                            <span style={{ color: '#fff' }}>;</span>
                        </div>
                         
                        <h1 className=' hero-slide-down display-3 fw-bold mb-3 ' style={{ animationDelay: '0.2s' }} >
                            Frontend
                            <span style={{ color: '	#33c4c4ff' }}> React.js </span> Developer
                        </h1>
                        <p className="   text-secondary fw-bold hero-slide-down  lead fs-4 mb-4" style={{ animationDelay: '0.5s' }}>
                            Crafting beautiful, performant web experiences with 1 year of expertise in <span className="fw-bold" style={{ color: '#33c4c4ff' }}>React.js</span> and modern web technologies.
                        </p>
<div className="hero-buttons" >
<div className="hero-slide-up" style={{ animationDelay: '0.8s' }}>
  <a
    className="hero-button m-3"
    href="/Resume_Aleena_Atiq.pdf"
    download
  >
    <i className="bi bi-download me-2"></i>
    Download Resume
  </a>
</div>

<div className="hero-slide-up" style={{ animationDelay: '1s' }}>
  <a
    className="hero-button"
    href="https://github.com/Aleenacoder-59?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-github"></i>
    View Projects
  </a>
</div>
</div>
<div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
  <span className="border border-secondary px-3 py-2 text-white " style={{ transition: "transform 0.2s ease" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>React.js</span>
  <span className="border border-secondary px-3 py-2 text-white " style={{ transition: "transform 0.2s ease" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>JavaScript</span>
  <span className="border border-secondary px-3 py-2 text-white" style={{ transition: "transform 0.2s ease" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>Bootstrap CSS</span>
  <span className="border border-secondary px-3 py-2 text-white" style={{ transition: "transform 0.2s ease" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>Tailwind CSS</span>
  <span className="border border-secondary px-3 py-2 text-white" style={{ transition: "transform 0.2s ease" }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>Github</span>
</div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;