import React from "react";
import { Col } from "react-bootstrap";
import "./css/ProjectCard.css";
import perfume from "../resources/photos/perfume.png";

export default function ProjectCard({
  title,
  description,
  techStack,
  image,
  liveUrl,
  codeUrl,
}) {
  return (
    <Col sm={12} md={6} lg={6} className="project-card">
      <div className="card-body">
        <img className="card-image" src={image} alt="projectpicture" />
        <div className="card-details">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{techStack}</p>
          <div className="links">
            <a className="live" href={liveUrl} target="_blank">
              {" "}
              <i className="fas fa-laptop"></i>
              LIVE
            </a>
            <a className="code" href={codeUrl} target="_blank">
              {" "}
              <i className="fas fa-code"></i>
              CODE
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}
