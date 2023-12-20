import React from "react";
import "./css/Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {



  return (
    <div id="contact">
      <Container className="contact-container">
        <Row className="contact-row">
          <Col className="d-flex flex-column align-items-center p-0">
            <h2 className="title">
              {" "}
              CONTACT<span class="line"> ______</span>
            </h2>
            <div className="contact-content">
              <div className="personal-contact">
                <h2>Thank you for visiting my website! </h2>
                <h5 style={{ textAlign: "left" }}>
                  I would be glad to connect with you on LinkedIn or GitHub.
                </h5>
                <h6>
                  I'm looking for an opportunity to work in the web development
                  industry, meet new professionals, evolve and share knowledge.{" "}
                </h6>
                <p>Best regards, </p>
                <p className="mb-3">Ecaterina </p>
                <a href="tel:0040753703887">
                  <i className="fas fa-phone fa-1x"></i> +40753703887
                </a>
                <br />
                <a href="mailto:ecaterinamihai97@gmail.com">
                  <i className="fas fa-envelope fa-1x"></i>{" "}
                  ecaterinamihai97@gmail.com
                </a>

                <div className="cover-picture"></div>
              </div>
              <div className="form-contact">
                <form
                  action="https://getform.io/f/34becda1-3ed4-4bdd-9aa8-244a981dd8c7"
                  method="post"
                >
                  <h5 className="mb-3" style={{ textAlign: "left" }}>
                    I really appreciate if you would like to send me a feedback.
                  </h5>
                  <h5 className="mb-3">Thank you!</h5>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="i.e.: name"
                    pattern="^[a-zA-Z]+$"
                    required
                  />
                  <input
                    type="text"
                    id="number"
                    name="number"
                    placeholder="i.e.: +0754673231"
                    maxLength="20"
                    pattern="^[0-9]+$"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="i.e.: helloworld@gmail.com"
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    required
                  />
                  <textarea placeholder="message" rows="3" required></textarea>
                  <div className="btn-container">
                    <button id="button-form" type="submit" value="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
