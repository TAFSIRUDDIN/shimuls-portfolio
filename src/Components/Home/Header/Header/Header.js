import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import Container from 'react-bootstrap/Container';
import headerBackgroundImg from '../../../../images/Header-background.jpg'
import Slider from './Slider';
import './Slider.css';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const Header = () => {
    return (
        <Container fluid style={{margin: '0', padding: '0'}}>
            <Slider></Slider>
            {/* <AudioPlayer data-aos="fade-up"></AudioPlayer> */}
        </Container>
    );
};

export default Header;