import React, { useEffect, useRef } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavMenu.css';
import logo from '../../../../images/logo.png';
import Lottie from 'lottie-web';


import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

if (firebase.apps.length === 0) { 
    firebase.initializeApp(firebaseConfig);
  }
const NavMenu = () => {
    
    return (
        <Container fluid style={{margin: '0', padding: '0', borderBottom: '1px solid black'}}>
            <Navbar className="mainNav" expand="lg">
            <Navbar.Brand href="#home"><img style ={{width: '186px'}} src={logo} alt="" /></Navbar.Brand>
            <div className="d-flex justify-content-center"><Navbar.Toggle aria-controls="basic-navbar-nav" /></div>
            <Navbar.Collapse className="mainNav-item" style={{margin: '0 auto'}} id="basic-navbar-nav">
                <Nav className="to">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#mywork">Projects</Nav.Link>
                <Nav.Link href="#">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavMenu;