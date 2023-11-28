import React from "react";
import "./css/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import whiteandblack from "../resources/photos/profile.png";
import resume from "../resources/documents/Resume-Mihai-Ecaterina.pdf";

export default function About() {
  return (
    <div id="about">
      <Container className="container-about">
        <Row className="row-about">
          <h2 className="title">
            {" "}
            <span>
              ABOUT ME<span class="line"> ______</span>
            </span>
          </h2>
          <Col xs={12} md={12} xl={12} className="card">
            <div className="content-card">
              <h2>..but also a</h2>
              <h4>deeply nature lover.</h4>
              <p>
                I consider myself as an enthusiast, creative and curious human
                being. Driven by a continuous perseverance and dedication, I am
                seeking to grow my knowledge, improve my skills and stay up to
                date with the latest technologies. Looking forward for an
                opportunity to work in web development industry where I can
                contribute, evolve and bring success. I also love taking long
                walks, hiking and sketching.
              </p>
              <div className="button-resume">
                <a
                  href={resume}
                  download="Resume-Mihai-Ecaterina.pdf"
                  target="_blank"
                >
                  <i className="fas fa-download px-2"></i>DOWNLOAD MY RESUME
                </a>
              </div>
            </div>
            <div className="picture">
              <div className="contour-picture">
                <img
                  className="profile-picture"
                  src={whiteandblack}
                  alt="profilepicture"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
