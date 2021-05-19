import React, { useEffect } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import MyWork from '../MyWork/MyWork';
import Review from '../Review/Review';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AudioPlayer from '../Header/AudioPlayer/AudioPlayer';

const Home = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    },[]);
    return (
        <div>
            <Header></Header>
            <AudioPlayer data-aos="fade-up"></AudioPlayer>
            <MyWork/>
            <About/>
            <Review/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;