import React from "react";
import "./css/About.css";
import picture from "../resources/photos/profile.png";
import resume from "../resources/documents/Resume-Mihai-Ecaterina.pdf";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {

  return (
    <div id="about">
      <Container className="container-about">
        <Row className="row-about">
          <Col className="d-flex flex-column align-items-center p-0">
            <h2 className="title">
              {" "}
              <span>
                ABOUT ME<span className="line"> ______</span>
              </span>
            </h2>
            <div className="card">
              <div className="card-content">
                <p>
                  I define myself as an enthusiast, creative and curious human
                  being. Driven by a continuous perseverance and dedication, I
                  am seeking to grow my knowledge, improve my skills and stay up
                  to date with the latest technologies. Looking forward for an
                  opportunity to work in the web development industry where I
                  can contribute, evolve and bring success. <br />I also love to
                  free my mind into the nature by taking long walks and hiking.
                  I enjoy reading books and sometimes doodling and sketching.
                </p>
                <div className="button-resume">
                  <a
                    href={resume}
                    download="Resume-Mihai-Ecaterina.pdf"
                    target="_blank"
                  >
                    <i className="fas fa-download px-2"></i>DOWNLOAD RESUME
                  </a>
                </div>
              </div>
              <div className="picture-container">
                <div className="contour-picture">
                  <img
                    className="profile-picture"
                    src={picture}
                    alt="profilepicture"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
