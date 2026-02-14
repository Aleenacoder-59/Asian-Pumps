import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap, FaSass, FaFire } from 'react-icons/fa';
import { SiVercel, SiNetlify } from 'react-icons/si';
import { Container, Row, Col } from 'react-bootstrap';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={45} className="icon html" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={45} className="icon css" /> },
  { name: 'JavaScript', icon: <FaJs size={45} className="icon js" /> },
  { name: 'React.JS', icon: <FaReact size={45} className="icon react" /> },
  { name: 'Git', icon: <FaGitAlt size={45} className="icon git" /> },
  { name: 'GitHub', icon: <FaGithub size={45} className="icon github" /> },
  { name: 'Firebase', icon: <FaFire size={45} className="icon firebase" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={45} className="icon bootstrap" /> },
  { name: 'Sass', icon: <FaSass size={40} className="icon sass" /> },
  { name: 'Vercel', icon: <SiVercel size={45} className="icon vercel" /> },
  { name: 'Netlify', icon: <SiNetlify size={45} className="icon netlify" /> },
];

const Skills = () => {
  return (
    <Container fluid id="skills" className="px-4 py-5 d-flex flex-column align-items-center justify-content-start" style={{
      background: "linear-gradient(to right, #000000, #062145ff)",
      minHeight: "100vh",
      overflow: "hidden"
    }}>
      
      <Row className="justify-content-center mb-4 text-white">
        <Col xs={12} className="text-center">
          <h1 className="text-white display-5 fw-bold">
            Skills <span style={{ color: '#33c4c4ff' }}> & Expertise</span>
          </h1>
          <p className='text-center text-secondary mt-2'> Constantly learning and improving my craft with the latest technologies</p>
        </Col>
      </Row>

      <Row className="w-100 d-flex justify-content-center mt-5">
        <Col xs="auto">
          <div className="skills-reel-wrapper">
            <div className="skills-reel-track">
              {[...skills, ...skills].map((skill, index) => (
                <div className="skill-item text-center mx-4" key={index}>
                  <div className="icon-container">
                    {skill.icon}
                    <span className="skill-name d-block mt-2">{skill.name}</span>
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

export default Skills;