import React from 'react';
import './Contact.css'
// import emailjs from 'emailjs-com';
import NavBar from '../NavBar/NavBar';
import azizulImage from '../../images/azizulImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
          <div className="container">
            <div className="row">
              {/* PROFILE CARD  */}
              <div className="col">
                <div className="card">
                  <img src={azizulImage} alt="azizul here" style={{width:"100%"}}/>
                  <h4>Mohammed Azizul Hoque Sheikh</h4>
                  <p className="title">Full Stack Developer | Programmer</p>
                  <p>University of Wollongong</p>
                  <div style={{margin: "24px 0"}}>

                    <a href="https://www.linkedin.com/in/mohammed-azizul-hoque-sheikh-2b5921210"
                    target="_blank" 
                    rel="noreferrer"
                    ><FontAwesomeIcon icon={faLinkedin} size="3x" color="steelBlue"/></a> 
                    &nbsp;
                    <a href="https://github.com/mohammedazizul"
                    target="_blank" 
                    rel="noreferrer"
                    ><FontAwesomeIcon icon={faGithubSquare} size="3x" color="black" /></a>  

                  </div>
                  <p>
                    <button>
                      <a href="mailto:mohammedazizulhoquesheikh@gmail.com" >
                        <FontAwesomeIcon icon={faEnvelope} size="3x" color="white" />
                      </a>
                    </button>
                  </p>
                </div>
              </div>

              <div className="col">

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

            </div>
          </div>

        </div>
      );
    };

export default Contact;