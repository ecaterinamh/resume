import React from "react";
import "./css/History.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import itschoollogo from "../resources/photos/itschool-logo.png";
import scoalainformalalogo from "../resources/photos/logo_color.png";
import codecademylogo from "../resources/photos/Untitled.png";
import htmllogo from "../resources/photos/html.svg";
import csslogo from "../resources/photos/css.svg";
import jslogo from "../resources/photos/javascript.svg";
import reactlogo from "../resources/photos/react.svg";
import bootstraplogo from "../resources/photos/bootstrap.svg";
import gitlogo from "../resources/photos/Git_icon.svg.png";
import githublogo from "../resources/photos/github.svg";
import nodejslogo from "../resources/photos/nodejs-logo-FBE122E377-seeklogo.com.png";

export default function History() {
  return (
    <div id="history">
      <Container className="container-history">
        <Row className="education-row">
          <h2> EDUCATIONAL HISTORY ______</h2>
          <Col xs={12} md={6} xl={6} className="course">
            <div className="content-course">
              <h4>
                Web Development Course at{" "}
                <a href='https://www.itschool.ro/cursuri/curs-web-development-online'><img className="itschool-logo" src={itschoollogo} /></a>
              </h4>
              <p>May 2023- November 2023</p>
              <p>
                Successfully graduated the Web Development Online Course
                certified and accredited by Ministry of Education with a two
                times/week frequency, totaling more than 150 hours of online and
                individual study, homeworks and building projects.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6} className="course">
            <div className="content-course">
              <h4>
                IT Intro Course at{" "}
                <a href='https://scoalainformala.ro/cursuri/cursuri-it-incepatori-online/cursuri-introducere-in-it/' alt='itschool'><img
                  className="scoalainformalalogo"
                  src={scoalainformalalogo} alt='scoalainformala'
                /></a>
              </h4>
              <p>March 2023- April 2023</p>
              <ul>
                <li>How does an application come to life.</li>
                <li>
                  Client-Server Application Architecture. Multi-layer
                  Application Architecture
                </li>
                <li>Basics of Internet and Protocols: DNS, TCP/IP, HTTPS.</li>
                <li>Agile environment and Scrum framework.</li>
                <li>Basics of Web Development: HTML5, CSS, JavaScript.</li>
                <li>Database fundamentals: SQL.</li>
                <li>Basics of Software Testing.</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} xl={6} className="course">
            <div className="content-course">
              <h4>
                {" "}
                Front-End Engineer Course at{" "}
                <a href='https://www.codecademy.com/catalog/subject/web-development'><img className="codecademylogo" src={codecademylogo} alt='codecademy'/></a>
              </h4>
              <p>June 2022- December 2023</p>
              <p>
                Self-paced Online Front-End Engineer Path.Web Foundations:
                fundamentals of HTML5 and CSS, developing sites locally,
                deploying websites. Making a website responsive: fundamentals of
                web design, advanced CSS, CSS transitions and animation,
                Bootstrap; Building Interactive Websites: fundamentals of JS,
                DOM, accessibility, Git and GitHub; Front-End Development: JS
                testing, Async JS, React, Redux; Interview Prep: linear and
                complex data structures, algorithms.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="skills-row">
          <h2>HARD SKILLS ______</h2>
          <Col xs={12} md={6} xl={6} className="skills-content">
            <div className="skills-items">
              <ul className="skills-list">
                <li>
                  <img className="reactlogo" src={reactlogo} alt="react" />
                  <p>REACT</p>
                </li>
                <li>
                  <img className="jslogo" src={jslogo} alt="js" />
                  <p>JAVASCRIPT</p>
                </li>
                <li>
                  <img
                    className="nodejslogo"
                    src={nodejslogo}
                    alt="nodejshub"
                  />
                  <p>NODEJS</p>
                </li>
                <li>
                  <img
                    className="bootstraplogo"
                    src={bootstraplogo}
                    alt="bootstrap"
                  />
                  <p>BOOTSTRAP</p>
                </li>
                <li>
                  <img className="gitlogo" src={gitlogo} alt="git" />
                  <p>GIT</p>
                </li>
                <li>
                  <img className="csslogo" src={csslogo} alt="css" />
                  <p>CSS3</p>
                </li>
                <li>
                  <img className="htmllogo" src={htmllogo} alt="html" />
                  <p>HTML5</p>
                </li>
                <li>
                  <img className="githublogo" src={githublogo} alt="github" />
                  <p>GITHUB</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
