import React from "react";
import { useState } from 'react';
import "./css/Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {

  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    // Add other form fields and their initial state here
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('https://getform.io/f/34becda1-3ed4-4bdd-9aa8-244a981dd8c7', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            username: '',
            phone: '',
            email: '',
            // Reset other form fields as needed
          });
        } else {
          // Handle unsuccessful form submission
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    // Validation logic goes here
    const errors = {};

    // Example: Check if username field is empty
    if (!data.username.trim()){
      errors.username = 'Name is required.';
    } else if (!/^[a-zA-Z\-]{2,15}$/.test(data.username)) {
      errors.username = 'Name is not valid.';
    } 

    if (!data.phone.trim()){
      errors.phone = 'Phone number is required.';
    } else if (!/^(\+|00)[1-9][0-9 \-\(\)\.]{7,32}$/.test(data.phone)) {
      errors.phone = 'Phone number is not valid.';
    }

    // Example: Check if email is valid
    if (!data.email.trim()){
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is not valid.';
    }



    // Add other validation rules for different fields

    return errors;
  };


  return (
    <div id="contact">
      <Container className="contact-container">
        <Row className="contact-row">
          <Col className="d-flex flex-column align-items-center p-0">
            <h2 className="title">
              {" "}
              CONTACT<span className="line"> ______</span>
            </h2>
            <div className="contact-content">
              <div className="personal-contact">
                <h2>Thank you for visiting my website! </h2>
                <br />
                <h6 style={{ textAlign: "left" }}>
                  I would be glad to connect with you on LinkedIn or GitHub.
                </h6>
                
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
                <a className="personalEmail" href="mailto:ecaterinamihai97@gmail.com">
                  <i className="fas fa-envelope-open fa-1x"></i>{" "}
                  ecaterinamihai97@gmail.com
                </a>
                <div className="cover-picture"></div>
              </div>
              <div className="form-contact">


              {submitted ? (
        <p>Form submitted successfully! Thank you!</p>
      ) : (
                <form onSubmit={handleSubmit} >
                  <h5 className="mb-3" style={{ textAlign: "left" }}>
                    I really appreciate if you would like to send me any feedback.
                  </h5>
                  <h5 className="mb-3">Thank you!</h5>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="name"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                  {errors.username && <span className="error">{errors.username}</span>}
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+40754673231"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <span className="error">{errors.phone}</span>}
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="helloworld@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}

                  <textarea placeholder="message" rows="3" ></textarea>
                  <div className="btn-container">
                    <button id="button-form" type="submit" value="submit">
                      SUBMIT
                    </button>
                  </div>
                </form> )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
