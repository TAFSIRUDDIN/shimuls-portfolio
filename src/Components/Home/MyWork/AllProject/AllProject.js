import React from 'react';
import { Container } from 'react-bootstrap';
import Project from '../Project/Project';

const AllProject = () => {
    return (
        <Container className="row bg-black" fluid>
            <div className="col-md-6">
                <Project></Project>
            </div>
            <div className="col-md-6">
                <Project></Project>
            </div>
        </Container>
    );
};

export default AllProject;