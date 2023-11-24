import React from 'react';
import './css/Contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import whiteandblack from '../resources/photos/profile.png';



export default function Contact(){

    return(
        <div id='contact'>
                <Container className='contact-container'>
                    <Row className='contact-row'>
                    <h2 className='contact-title'> CONTACT ______</h2>
                        <Col xs={12} md={6} xl={6} className='contact-content'>
                                <div className='personal-contact'>
                                    <h2 style={{textAlign: 'center'}}>Thank you for visiting my website! </h2>
                                    <h5 style={{textAlign: 'left'}}>I would like to connect with you on LinkedIn or GitHub. I'm interested in any new opportunity to work in the web development industry. 
Whether you have a question or just want to say hi, I'll try my best to get back to you! </h5>
                                    <p>Best regards, </p>
                                    <p>Ecaterina </p>
                                    
                                </div>
                                <div className='form-contact'>
                                    <form action='https://getform.io/f/34becda1-3ed4-4bdd-9aa8-244a981dd8c7' method='post'>
                                        <h5 className='mb-3'>I really appreciate if you would like to send me a feedback.</h5>
                                        <h5 className='mb-3'>Thank you!</h5>
                                        <input type="text" id='name' name='name' placeholder='i.e.: name' maxlength='30' required/>
                                        <input type="text" id='number' name='number' placeholder='i.e.: +0754673231' maxlength='15' required/>
                                        <input type="email" id='email' name='email' placeholder='i.e.: helloworld@gmail.com' required/>
                                        <textarea placeholder='message' rows='3' cols='41'></textarea>
                                        <div class="btn-container"><button id='button-form' type="submit" value='submit'>Submit</button></div>
                                    </form>
                                </div>
                        </Col>
                    </Row>
                </Container> 
                
       </div>
    )
}