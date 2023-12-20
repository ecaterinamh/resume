import React from "react";
import "./css/Intro.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Intro() {
  return (
    <div id="intro">
      <Container className="container-intro">
        <Row className="row">
          <Col className="text-container left">
            <h2>Welcome on my website</h2>
          </Col>
          <Col className="text-container right">
            <h2>I'm Ecaterina Mihai</h2>
            <h3>Front-End Developer</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
