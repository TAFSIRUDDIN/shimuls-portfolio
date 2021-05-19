import React from 'react';
import { Container } from 'react-bootstrap';
import image1 from '../../../images/image-1.jpg';
import image2 from '../../../images/image-2.jpg';
import facebook from './Facebook.png';
import twitter from './Twitter.png';
import linkedin from './Linkedin.png';
import './About.css';


const About = () => {
    return (
        <Container style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
            <h3>About Me</h3>
            <div style={{ marginTop: '5rem'}} className="row">
                <div data-aos="fade-right" className="col-md-6"><img className="about-img" src={image1} alt="" /></div>
                <div data-aos="fade-left" className="col-md-6 about-text1">
                    <div className="bars"></div>
                    <h1>Megan Smith</h1>
                    <h6>DESIGNER / DEVELOPER</h6>
                    <br />
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="social-icon">
                        <div className="icons">
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                        <a href="#"><img src={linkedin} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '4rem'}} className="row">
                <div data-aos="fade-right" className="col-md-6 about-text2">
                    <div className="bars"></div>
                    <h1>Megan Smith</h1>
                    <h6>DESIGNER / DEVELOPER</h6>
                    <br />
                    <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="social-icon">
                        <div className="icons">
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                        <a href="#"><img src={linkedin} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-md-6 d-flex flex-row-reverse"><img className="about-img" src={image2} alt="" /></div>
            </div>
            
        </Container>
    );
};

export default About;