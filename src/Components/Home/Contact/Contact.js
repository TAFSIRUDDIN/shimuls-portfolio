import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faMobileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'lottie-web';
import image from '../../../images/Upwork_logo_logotype.png'

// import { lightSpeedOut } from 'react-animations';
// import Radium, {StyleRoot} from 'radium';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});
    },[]);
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_2ggkkfs', 'template_n5i9rjh', e.target, 'user_vbx0via6kjNpugGuu2UWK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

      const container6 = useRef(null);
      useEffect(() => {
          Lottie.loadAnimation({
              container: container6.current,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: require('./17893-work-from-home.json')
          })
      },[]);
      const container7 = useRef(null);
      useEffect(() => {
          Lottie.loadAnimation({
              container: container7.current,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: require('./39289-fiverr-morph.json')
          })
      },[]);
    return (
        <Container id="contact" style={{backgroundColor: '#fff'}}>
            <div className="contact-head">
                <h1 data-aos="fade-up" className="Know-me">Get In Touch</h1>
            </div>
            <div className="contact-items row">
                <div data-aos="fade-up" className="contact-item col-md-5">
                    {/* <h4>I am working from home</h4> */}
                    <div style={{width: '45%'}} className="container6" ref={container6}></div>
                    <h5>Available on</h5>
                    <div className="d-flex justify-content-between">
                        <div className="availability">
                            <a href="#"><div style={{width: '150%'}} className="container7" ref={container7}></div></a>
                            <h6>FIVERR</h6>
                        </div>
                        <div style={{marginLeft: '10%', marginTop: '3%'}} className="availability">
                            <a href="#"><img style={{width: "56%"}}src={image} alt="" /></a>
                            <h6>UPWORK</h6>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-up" className="contact-item col-md-7">
                <h4>Contact with via Email</h4>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    
                    <input type="text" name="user_name" placeholder="Name"/>
                    
                    <input type="email" name="user_email" placeholder="Email"/><br/>
                    
                    <textarea name="message" placeholder="Message"/><br/>
                    <input className="submit-btn" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;