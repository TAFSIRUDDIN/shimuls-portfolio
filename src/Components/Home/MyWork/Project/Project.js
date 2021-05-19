import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './Project.css'

const Project = () => {
    
    return (
        <Container className="main-div" style={{textAlign: 'left', padding: '0'}}>
            <a href="/projectDetails"><div style={{width: '100%'}} className="mains">
                <div className="bar"></div>
                <br />
                <div className="project-name-time d-flex justify-content-between">
                    <div className="project-name"><h6>Project 1</h6></div>
                    <div className="project-time"><h6>3:55</h6></div>
                </div>
                <br />
                <h2>Episode 51: Designing for the future</h2>
                <br />
                <h5>JANUARY 03, 2018</h5>
                <br />
                <a className="col-md-6 align-self-end" href="#"><h4>Play Episode</h4></a>
            </div>
            </a>
        </Container>
    );
};

export default Project;