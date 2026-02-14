import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import todo from "../assets/todo.png";  
import weather from "../assets/weather.png";
import login from "../assets/login.png";

const Projects = () => {
  const projects = [
    {
      id: "todo",
      title: "To-Do App",
      description:
        "A simple task manager where you can add, edit, and delete tasks. Data is saved in local storage so it persists across sessions.",
      image: todo,
      tech: ["React.js", "Bootstrap"],
      links: {
        demo: "https://task-journey.netlify.app/",
        github: "https://github.com/Aleenacoder-59/daily-log",
      },
    },
    {
      id: "weather",
      title: "Weather App",
      description:
        "Search any city and get real-time weather updates using OpenWeather API. Includes temperature, conditions, and icons.",
      image: weather,
      tech: ["React", "OpenWeather API" , "Bootstrap", "Fetch", "Vite"],
      links: {
        demo: "https://skytemp.netlify.app/",
        github: "https://github.com/Aleenacoder-59/sky-temp",
      },
    },
    {
      id: "auth",
      title: "Auth (Signup/Login)",
      description:
        "Created a minimal authentication UI featuring signup and login forms with error handling.",
      image: login,
      tech: ["React", "Bootstrap"],
      links: {
        demo: "https://easy-auth.netlify.app/",
        github: "https://github.com/Aleenacoder-59/easy-auth",
      },
    },
  ];

  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1) {
              if (index % 2 === 0) {
                entry.target.classList.add("slide-in-left");
              } else {
                entry.target.classList.add("slide-in-right");
              }
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Container
      fluid
      id="projects"
      className="px-4 py-5 "
      style={{
        background: "linear-gradient(to right, #000000, #20344eff)",
        minHeight: "100vh",
      }}
    >
      <Row className="justify-content-center mb-5">
        <Col xs={12} className="text-center">
          <h1 className="text-white display-5 fw-bold mb-2">
            My <span className="text-info">Projects</span>
          </h1>
          <p className="text-white-50 mb-0">A few things I've built recently</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col lg={8} key={project.id} className="mb-5">
            <div 
              className="bg-dark bg-opacity-25 border border-white border-opacity-10 rounded overflow-hidden transition-all"
              ref={(el) => (projectRefs.current[index] = el)}
              style={{ 
                opacity: 0, 
                transform: index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)',
                height: '300px'
              }}
            >
              <Row className="g-0 h-100">
                <Col md={4} className="h-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-100 w-100 object-fit-cover transition-all"
                  />
                </Col>
                <Col md={8} className="d-flex flex-column p-4">
                  <h3 className="text-white fw-semibold mb-3">{project.title}</h3>
                  <p className="text-white-50 mb-3 flex-grow-1">{project.description}</p>
                  
                  <div className="mb-3">
                   
                    <div>
                      {project.tech.map((t) => (
                        <Badge 
                          key={t} 
                          bg="transparent" 
                          className="text-info border border-info border-opacity-25 px-2 py-1 me-1 mb-1"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-top border-white border-opacity-10 pt-3 mt-auto d-flex gap-2 flex-wrap">
                    <Button 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      variant="outline-info"
                      className="d-inline-flex align-items-center"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Live preview
                    </Button>
                    <Button 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noreferrer"
                      variant="outline-info"
                      className="d-inline-flex align-items-center"
                    >
                      <FaGithub className="me-1" />
                      Source code
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;