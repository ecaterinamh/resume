import React from "react";
import "./css/Portfolio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../components/ProjectCard";
import perfume from "../resources/photos/perfume.png";
import desktopPreview from "../resources/photos/desktop-preview.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description:
        "Portfolio is a SPA which includes a short resume about my ambitious learning path, skills and projects. ",
      techStack:
        "React | React Bootstrap | JS | NodeJs | npm | Bootstrap | CSS3 | HTML5",
      image: desktopPreview,
      liveUrl: "https://resume-project-me.netlify.app/",
      codeUrl: "https://github.com/ecaterinamh/resume",
    },
    {
      id: 2,
      title: "Perfume Card",
      description:
        "I completed a challenge from the The Front-End Mentor website. I made it by using CSS3, HTML5, flexbox.",
      techStack:
        "React | React Bootstrap | JS | NodeJs | npm | Bootstrap | CSS3 | HTML5",
      image: perfume,
      liveUrl: "https://fem-product-preview-card-solution.netlify.app/",
      codeUrl: "",
    },
    {
      id: 3,
      title: "Perfume Card",
      description:
        "Portfolio is a SPA which includes a short resume about my ambitious learning path, skills and projects.",
      techStack:
        "React | React Bootstrap | JS | NodeJs | npm | Bootstrap | CSS3 | HTML5",
      image: perfume,
      liveUrl: "https://fem-product-preview-card-solution.netlify.app/",
      codeUrl: "",
    },
    {
      id: 4,
      title: "Portfolio",
      description:
        "Portfolio is a SPA which includes a short resume about my ambitious learning path, skills and projects. ",
      techStack:
        "React | React Bootstrap | JS | NodeJs | npm | Bootstrap | CSS3 | HTML5",
      image: desktopPreview,
      liveUrl: "https://resume-project-me.netlify.app/",
      codeUrl: "https://github.com/ecaterinamh/resume",
    },
  ];

  return (
    <div id="portfolio">
      <Container className="container-portfolio">
        <Row className="portfolio-row">
          <Col className="d-flex flex-column align-items-center p-0">
            <h2 className="title">
              {" "}
              PORTFOLIO<span className="line"> ______</span>
            </h2>
            <Row className="projects-list g-1">
              {projects.map((project) => {
                return <ProjectCard key={project.id} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
