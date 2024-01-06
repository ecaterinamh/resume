import React from "react";
import "./css/History.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import itschoollogo from "../resources/photos/itschool-logo.png";
import scoalainformalalogo from "../resources/photos/logo_color.png";
import codecademylogo from "../resources/photos/Untitled.png";
import udemylogo from "../resources/photos/Udemy-Symbol.png";
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
          <Col className="d-flex flex-column align-items-center p-0">
            <h2 className="title">
              {" "}
              EDUCATIONAL HISTORY <span className="line"> ______</span>
            </h2>
            <div className="timeline">
            <div className="card-course left-container">
                <div className="point"></div>
                <div className="content-course">
                  <h5 className="mb-3">
                    {" "}
                    React- The Complete Guide 2023 on{" "}
                    <a className="my-2" href="https://www.udemy.com">
                      <img className="udemylogo" src={udemylogo} alt="udemy" />
                    </a>
                  </h5>
                  <p>In progress</p>
                  <p>
                    This course is the complete guide to learn React , Hooks,
                    Context API, React Redux, React Router, HTTP, NextJS, React
                    Unit Testing, best practices and way more. The author is
                    Maximilian Schwarzmüller. The course included 74 hours of
                    online study, 38 coding exercises, assigments, articles, and
                    projects. Is is awarded with a certificate of completion.
                  </p>
                </div>
              </div>
              <div className="card-course right-container">
                <div className="point"></div>
                <div className="content-course">
                  <h5 className="mb-3">
                    {" "}
                     The Complete JavaScript Course 2024: From Zero to Expert!{" "}
                    <a className="my-2" href="https://www.udemy.com">
                      <img className="udemylogo" src={udemylogo} alt="udemy" />
                    </a>
                  </h5>
                  <p>January 2024 - February 2024</p>
                  <p>
                    This course is the complete guide to learn and master JavaScript. The author is
                    Jonas Schmedtmann. The course included 65 hours of
                    online study, 8 coding exercises, assigments, 22 articles, and
                    projects. Is is awarded with a certificate of completion.
                  </p>
                </div>
              </div>
              <div className="card-course left-container">
                <div className="point"></div>
                <div className="content-course">
                  <h5>
                    Web Development Course at{" "}
                    <a href="https://www.itschool.ro/cursuri/curs-web-development-online">
                      <img className="itschool-logo" src={itschoollogo} />
                    </a>
                  </h5>
                  <p>May 2023 - November 2023</p>
                  <p>
                    Successfully graduated the Web Development Online Course
                    certified and accredited by Ministry of Education with a two
                    times/week frequency, totaling more than 150 hours of online
                    and individual study, homeworks and building projects. Tech
                    stack: React, JS, NodeJS, npm, APIs, Git/Github, DOM,
                    Bootstrap, CSS3, HTML5.
                  </p>
                </div>
              </div>
              <div className="card-course right-container">
                <div className="point"></div>
                <div className="content-course">
                  <h5>
                    Intro in IT Course at{" "}
                    <a
                      href="https://scoalainformala.ro/cursuri/cursuri-it-incepatori-online/cursuri-introducere-in-it/"
                      alt="itschool"
                    >
                      <img
                        className="scoalainformalalogo"
                        src={scoalainformalalogo}
                        alt="scoalainformala"
                      />
                    </a>
                  </h5>
                  <p>March 2023 - April 2023</p>
                  <p>
                    How does an application come to life.Client-Server
                    Application Architecture. Multi-layer Application
                    Architecture.Basics of Internet and Protocols: DNS, TCP/IP,
                    HTTPS.Agile environment and Scrum framework.Basics of Web
                    Development: HTML5, CSS, JavaScript.Database fundamentals:
                    SQL.Basics of Software Testing.
                  </p>
                </div>
              </div>
              <div className="card-course left-container">
                <div className="point"></div>
                <div className="content-course">
                  <h5>
                    {" "}
                    Front-End Engineer Course at{" "}
                    <a
                      className="my-2"
                      href="https://www.codecademy.com/catalog/subject/web-development"
                    >
                      <img
                        className="codecademylogo"
                        src={codecademylogo}
                        alt="codecademy"
                      />
                    </a>
                  </h5>
                  <p>June 2022 - December 2023</p>
                  <p>
                    Self-paced Online Front-End Engineer Path. HTML5, CSS3,
                    developing sites locally, deploying websites. Website
                    responsiveness: basics of web design, advanced CSS, CSS
                    transitions and animation, Bootstrap; Interactive Websites:
                    JS, DOM, accessibility, Git and GitHub. JS testing, Async
                    JS, React, Redux; Interview Prep: linear and complex data
                    structures, algorithms.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="skills-row">
          <Col className="d-flex flex-column align-items-center p-0">
            <h2 className="title">
              TECH STACK <span className="line"> ______</span>
            </h2>
            <div className="skills-content">
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
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
