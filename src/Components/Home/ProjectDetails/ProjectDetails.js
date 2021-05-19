import React, { useEffect } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import SingleAudioPlayer from '../../SingleAudioPlayer/SingleAudioPlayer';
import MyWork from '../MyWork/MyWork';
import Review from '../Review/Review';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectDetails = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    },[]);
    return (
        <div>
            <Header/>
            <SingleAudioPlayer></SingleAudioPlayer>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default ProjectDetails;