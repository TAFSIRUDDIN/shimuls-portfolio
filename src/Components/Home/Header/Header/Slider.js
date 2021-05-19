import React, { useEffect, useRef } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import headerBackgroundImg from '../../../../images/Header-background.jpg'
import headerBackgroundImg1 from '../../../../images/Header-background1.jpg'
import headerBackgroundImg2 from '../../../../images/Header-background2.jpg'
import NavMenu from '../NavMenu/NavMenu';
import './Slider.css';
import Typical from 'react-typical';
import ProjectCard from '../ProjectCard/ProjectCard';
// import lottie from 'lottie-web';
import Lottie from 'lottie-web';


const Slider = () => {
    const container = useRef(null);
    const container1 = useRef(null);
    const container2 = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./59446-black-guy-animation.json')
        })
    },[]);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container1.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./59446-black-guy-animation.json')
        })
    },[])
    useEffect(() => {
        Lottie.loadAnimation({
            container: container2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./59446-black-guy-animation.json')
        })
    },[])
    return (
        <Container fluid style={{margin: '0', padding: '0'}}>
            <Carousel fade>
                {/* <Carousel.Item className="banner">
                    <Carousel.Caption style={{top: '1%'}}>
                        <NavMenu/>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={headerBackgroundImg}
                    alt="First slide"
                    />
                    <Carousel.Caption style={{bottom: '125px'}}>
                    <div className="row">
                        <div className="col-md-6 ">
                            <Typical
                                steps={['I am Tafsir Uddin.', 3000, 'I am a Web Developer.', 3000]}
                                loop={Infinity}
                                wrapper="h1"
                            /> 
                            <div style={{width: '100%', height: '100%'}} className="container" ref={container}></div>
                        </div>
                        <div className="col-md-6">
                            <ProjectCard/>
                        </div>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item className="banner">
                    <Carousel.Caption style={{top: '1%'}}>
                        <NavMenu/>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={headerBackgroundImg1}
                    alt="Second slide"
                    />

                    <Carousel.Caption style={{bottom: '125px'}}>
                    <div className="row">
                        <div className="slider-top col-md-6 ">
                            <Typical
                                steps={['I am Tafsir Uddin.', 3000, 'I am a Web Developer.', 3000]}
                                loop={Infinity}
                                wrapper="h1"
                            />
                            <div style={{width: '100%', height: '100%'}} className="container1" ref={container1}></div> 
                        </div>
                        <div className="col-md-6">
                            <ProjectCard/>
                        </div>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner">
                    <Carousel.Caption style={{top: '1%'}}>
                        <NavMenu/>
                    </Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={headerBackgroundImg2}
                    alt="Third slide"
                    />

                    <Carousel.Caption style={{bottom: '125px'}}>
                    <div className="row">
                        <div className="slider-top col-md-6 ">
                            <Typical
                                steps={['I am Tafsir Uddin.', 3000, 'I am a Web Developer.', 3000]}
                                loop={Infinity}
                                wrapper="h1"
                            /> 
                           <div style={{width: '100%', height: '100%'}} className="container2" ref={container2}></div> 

                        </div>
                        <div className="col-md-6">
                            <ProjectCard/>
                        </div>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Slider;