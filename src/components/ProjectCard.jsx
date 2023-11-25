import React from 'react';
import {Col} from "react-bootstrap";
import './css/ProjectCard.css';

export default function ProjectCard({title, description, image, liveUrl, codeUrl}) {
  return (
    <Col size={12} sm={6} md={3} className="project-card">
      <div className='project-content'>
        <img className='project-image' src={image} alt='pictureproject'/>
        <div className='project-body'>
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>
        <div className='links'>
            <a className='live' href={liveUrl} target="_blank">Live Project</a>
            <a className='code' href={codeUrl} target="_blank">GitHub repository</a>
          </div>
      </div>
    </Col>
  )
}