import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    const serviceID  = 'service_8vskc0e';   
const templateID = 'template_jbp0av9';  
const publicKey  = 'TtCOkqPZ0CljbE-kI'; 
   

    
     emailjs.send(serviceID, templateID, {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'aleenaatiq59@gmail.com' 
}, publicKey)
.then((response) => {
    console.log('Email sent successfully!', response.status, response.text);
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
})
.catch((error) => {
    console.error('Failed to send email:', error);
    alert('Failed to send message. Please try again later.');
})
.finally(() => {
    setIsSubmitting(false);
});
  };

  return (
    <Container 
      fluid 
      id="contact" 
      className="px-4 py-5 d-flex flex-column align-items-center justify-content-center" 
      style={{
        background: "linear-gradient(to right, #000000, #062145ff)",
        minHeight: "100vh",
      }}
    >
      
      {showAlert && (
        <Alert variant="success" className="position-fixed top-0 start-50 translate-middle-x mt-3 z-3">
          Your message has been sent successfully!
        </Alert>
      )}
      
      
      <Row className="justify-content-center mb-4 text-white w-100">
        <Col xs={12} className="text-center">
          <h1 className="text-white display-5 fw-bold mb-3">
            Let's <span style={{ color: '#33c4c4' }}>Connect</span>
          </h1>
          <p className="text-white lead mb-0">
            Bring your ideas to life. Let's connect to explore projects, partnerships, and professional opportunities.
          </p>
        </Col>
      </Row>

      
      <Row className="w-100 justify-content-center mb-5 flex-md-nowrap">
        
        <Col md={5} className="p-4 mb-4 mb-md-0 me-md-4">
          <h4 className="text-white mb-3">Get in Touch</h4>
          <p className="text-white-50 mb-4">
            Excited to work on meaningful projects. Reach out to discuss ideas or potential collaborations.
          </p>

          <div className="mb-4">
   
            <div className="contact-info-box p-2 mb-3 d-flex align-items-center">
              <div className="icon-container bg-info bg-opacity-10 p-3 rounded-circle me-2">
                <FaEnvelope size={20} className="text-info" />
              </div>
              <div>
                <h6 className="mb-0 text-white">Email</h6>
                <a href="mailto:aleenaatiq59@gmail.com" className="text-secondary text-decoration-none">
                  aleenaatiq59@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-box p-2 mb-3 d-flex align-items-center">
              <div className="icon-container bg-info bg-opacity-10 p-3 rounded-circle  me-2">
                <FaPhone size={10} className="text-info" />
              </div>
              <div>
                <h6 className="mb-0 text-white">Phone</h6>
                <a href="tel:+923124540556" className=" text-secondary text-decoration-none">
                  +92 3124540556
                </a>
              </div>
            </div>

            
            <div className="contact-info-box p-2 mb-3 d-flex align-items-center">
              <div className="icon-container bg-info bg-opacity-10 p-3 rounded-circle me-2">
                <FaMapMarkerAlt size={20} className="text-secondary" />
              </div>
              <div>
                <h6 className="mb-0 text-white">Location</h6>
                <p className="mb-0 text-secondary">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <h5 className="text-white mt-5 mb-3">Follow Me</h5>
          <div className="d-flex">
            <a 
              href="https://github.com/Aleenacoder-59" 
              className="social-icon me-3 d-flex align-items-center justify-content-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aleena-atiq-a7274a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              className="social-icon me-3 d-flex align-items-center justify-content-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </Col>

        {/* Contact Form Column */}
        <Col md={5} className="p-4 contact-form-container">
          <h4 className="text-white mb-4">Send a Message</h4>
          <Form onSubmit={handleSubmit}>
            {/* Name and Email fields */}
            <Row className="mb-3">
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <Form.Group controlId="formName">
                  <Form.Label className="text-white">Name *</Form.Label>
                  <Form.Control 
                    type="text" 
                    className="transparent-input text-white"
                    name="name" 
                    placeholder="Your full name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="text-white">Email *</Form.Label>
                  <Form.Control 
                    type="email" 
                    className="transparent-input text-white"
                    name="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Subject field */}
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label className="text-white">Subject *</Form.Label>
              <Form.Control 
                type="text" 
                className="transparent-input text-white"
                name="subject" 
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label className="text-white">Message *</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                className="transparent-input text-white"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Submit button */}
            <Button 
              type="submit" 
              className="submit-btn w-100 py-2 d-flex justify-content-center align-items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="me-2" /> Send Message
                </>
              )}
            </Button>
          </Form>
        </Col>
      </Row>

      
    </Container>
  );
};

export default ContactPage;