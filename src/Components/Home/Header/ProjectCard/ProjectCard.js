import React from 'react';
import { Container } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = () => {
    return (
        <Container fluid style={{textAlign: 'left'}}>
            <div style={{width: '90%'}} className="main">
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
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <br />
                <a href="#"><h6>Play Episode</h6></a>
            </div>
        </Container>
    );
};

export default ProjectCard;