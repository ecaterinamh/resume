import React from 'react';
import './css/Intro.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';



export default function Intro(){



    return(
       <div id='intro'>
            <div className="color">
                <Container className='container-intro'>
                    <Row classname=" p-5">
                        <Col xs={12} md={12} xl={12} id='text-intro'>
                                <div className='text'>
                                    <h2>Welcome on my website.</h2>
                                    <h3>Enjoy.</h3>
                                </div>
                        </Col> 
                    </Row>
                </Container>
            </div>
       
       </div>



    )
}