
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"

import "./Review.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDolly } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faAddressCard, faAlignJustify, faFile, faHome, faPhoneSquareAlt, faPortrait, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';



// import Swiper core and required modules
import SwiperCore, {
    Autoplay, EffectCoverflow,Pagination
} from 'swiper/core';
import { Container } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([Autoplay,EffectCoverflow,Pagination]);
const reviews = [
    {
        name : 'Shirley Amirul',
        profession : 'Designer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        description : 'Its freeing to be able to catch up on customized news and not be distracted by a social media element on the same site'
        
    },
    {
        name : 'Shirley Fultz',
        profession : 'Designer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        description : 'Its freeing to be able to catch up on customized news and not be distracted by a social media element on the same site'
        
    },
    {
        name : 'Shirley Fultz',
        profession : 'Designer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        description : 'Its freeing to be able to catch up on customized news and not be distracted by a social media element on the same site'
        
    },
    {
        name : 'Shirley topu',
        profession : 'Designer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        description : 'Its freeing to be able to catch up on customized news and not be distracted by a social media element on the same site'
        
    },
    {
        name : 'Shirley tuhin',
        profession : 'Designer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        description : 'Its freeing to be able to catch up on customized news and not be distracted by a social media element on the same site'
        
    }

]

const Review = () => {
    return (
        <Container style={{marginTop: '5rem', marginBottom: '1rem'}}>
            <h2 style={{textAlign: 'center'}}>CLIENTS OPINIONS</h2>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
                }} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }} pagination={true} className="mySwiper">


                {
                    reviews.map(review => 
                        <SwiperSlide key={review.name}>
                            <div className="myCarousel">
                            <img className="slide-image" src={review.image}/>

                                <h5>{review.name}</h5>
                                <h6>{review.profession}</h6>
                                
                                <div className="containers">
                                    <div className="skills">
                                        <div className="rating">
                                            <input type="radio" name="" />
                                            <input type="radio" name="" checked/>
                                            <input type="radio" name="" />
                                            <input type="radio" name="" />
                                            <input type="radio" name="" />
                                            <input type="radio" name="" />
                                            <input type="radio" name="" />
                                            <input type="radio" name="" />
                                            <input type="radio" name="" />
                                            <input type="radio" name="" />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <p>
                                {review.description}
                                </p>
                            </div>
                        </SwiperSlide>
                        
                        )
                }








                {/* <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide> */}

                {/* <SwiperSlide>
                        <div className="myCarousel">
                        <img className="slide-image" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" />

                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                            </p>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="myCarousel">
                        <img className="slide-image" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" />

                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                            </p>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="myCarousel">
                        <img className="slide-image" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" />

                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                            </p>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="myCarousel">
                        <img className="slide-image" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" />

                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                            </p>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className="myCarousel">
                        <img className="slide-image" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" />

                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                            It's freeing to be able to catch up on customized news and not be
                            distracted by a social media element on the same site
                            </p>
                        </div>
                </SwiperSlide> */}
                
            </Swiper>
        </Container>
    );
};

export default Review;