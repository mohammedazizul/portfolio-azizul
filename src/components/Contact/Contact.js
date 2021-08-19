import './Contact.css';
import React from 'react';
// import emailjs from 'emailjs-com';
import NavBar from '../NavBar/NavBar';
import azizulImage from '../../images/azizulImage.png'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    // function sendEmail(e) {
    //     e.preventDefault();
    
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   }
    
      return (
        <div>
          <NavBar />
          <Container>
            <Row xs={1} md={2}>
              {/* PROFILE CARD  */}
              <Col>
              <Card>
                <Card.Img variant="top" src={azizulImage} alt="azizul here" style={{width:"100%"}} />
                <Card.Body>
                  <Card.Title>Mohammed Azizul Hoque Sheikh</Card.Title>
                  <Card.Text>
                  <p className="title">Full Stack Developer | Final Year Student at</p>
                  <p>University of Wollongong</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <a href="https://www.linkedin.com/in/mohammedazizul/"
                    target="_blank" 
                    rel="noreferrer"
                    ><FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077b5"/></a> 
                    &nbsp;
                    <a href="https://github.com/mohammedazizul"
                    target="_blank" 
                    rel="noreferrer"
                    ><FontAwesomeIcon icon={faGithubSquare} size="3x" color="#333" /></a>  
                    &nbsp;
                    <a href="mailto:mohammedazizulhoquesheikh@gmail.com" >
                      <FontAwesomeIcon icon={faEnvelope} size="3x" color="#B23121" />
                    </a>
                    &nbsp;
                    <a href="https://wa.me/+601164334795"
                    target="_blank" 
                    rel="noreferrer"
                    ><FontAwesomeIcon icon={faWhatsappSquare} size="3x" color="#25D366" /></a>  
                </Card.Footer>
              </Card>
              </Col>

              {/* right div  */}
              <Col>
              <div className="col">
                {/* send email via email js */}
                {/* <form className="contact-form" onSubmit={sendEmail}>
                  <input type="hidden" name="contact_number" />
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <br/>
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <br/>
                  <label>Message</label>
                  <textarea name="message" />
                  <br/>
                  <input type="submit" value="Send" />
                </form> */}
              </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };

export default Contact;