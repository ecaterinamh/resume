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
        "Portfolio is a SPA which includes a short resume about my ambitious learning path, skills and projects. In order to create it, I used React, React Bootstrap, JS, NodeJs, npm, Bootstrap, CSS3 and HTML5. ",
      image: desktopPreview,
      liveUrl: "https://resume-project-me.netlify.app/",
      codeUrl: "https://github.com/ecaterinamh/resume",
    },
    {
      id: 2,
      title: "Perfume Card",
      description:
        "This project was a challenge completed from the The Front-End Mentor website. I made it by using CSS3, HTML5, flexbox.",
      image: perfume,
      liveUrl: "https://fem-product-preview-card-solution.netlify.app/",
      codeUrl: "",
    },
    {
      id: 3,
      title: "Perfume Card",
      description:
        "This project was a challenge completed from the The Front-End Mentor website. I made it by using CSS3, HTML5, flexbox.",
      image: perfume,
      liveUrl: "https://fem-product-preview-card-solution.netlify.app/",
      codeUrl: "",
    },
    {
      id: 4,
      title: "Perfume Card",
      description:
        "This project was a challenge completed from the The Front-End Mentor website. I made it by using CSS3, HTML5, flexbox.",
      image: perfume,
      liveUrl: "https://fem-product-preview-card-solution.netlify.app/",
      codeUrl: "",
    },
    {
      id: 5,
      title: "Perfume Card",
      description:
        "This project was a challenge completed from the The Front-End Mentor website. I made it by using CSS3, HTML5, flexbox.",
      image: perfume,
      liveUrl: "https://fem-product-preview-card-solution.netlify.app/",
      codeUrl: "",
    },
    {
      id: 6,
      title: "Perfume Card",
      description:
        "This project was a challenge completed from the The Front-End Mentor website. I made it by using CSS3, HTML5, flexbox.",
      image: perfume,
      liveUrl: "https://fem-product-preview-card-solution.netlify.app/",
      codeUrl: "",
    },
  ];

  return (
    <div id="portfolio">
      <Container className="container-portfolio">
        <Row className="portfolio-row">
          <h2 className="portfolio-title">
            {" "}
            PORTOFOLIO<span class="line"> ______</span>
          </h2>
          <div className="projects-list">
            {projects.map((project) => {
              return <ProjectCard key={project.id} {...project} />;
            })}
          </div>
        </Row>
      </Container>
    </div>
  );
}
