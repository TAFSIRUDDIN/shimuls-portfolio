import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="divi">
            <Container>
                <div className="row footer-text">
                    <div className="col-md-3">
                        <div className="footer-bar"></div>
                            <h4 className="footer-head">EPISODE SERIES</h4>
                        <div className="d-flex justify-content-between divs">
                            <a href="#"><p>Season1 </p></a>
                            <p>1</p>
                        </div>
                        <div className="d-flex justify-content-between divs">
                            <a href="#"><p>Season2 </p></a>
                            <p>2</p>
                        </div>
                        <div className="d-flex justify-content-between divs">
                            <a href="#"><p>Season3 </p></a>
                            <p>3</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-bar"></div>
                        <h4 className="footer-head">RECENT EPISODES</h4>
                        <div className="episode-link divs">
                            <a href="#">Episode 53: Artist Corner with Justin</a><br />
                            <span>December 8, 2017</span>
                        </div>
                        <div className="episode-link divs">
                            <a href="#">Episode 53: Artist Corner with Justin</a><br />
                            <span>December 8, 2017</span>
                        </div>
                        <div className="episode-link divs">
                            <a href="#">Episode 53: Artist Corner with Justin</a><br />
                            <span>December 8, 2017</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-bar"></div>
                        <h4 className="footer-head">Recent News</h4>
                        <div className="episode-link divs">
                            <a href="#">Episode 53: Artist Corner with Justin</a><br />
                            <span>December 8, 2017</span>
                        </div>
                        <div className="episode-link divs">
                            <a href="#">Episode 53: Artist Corner with Justin</a><br />
                            <span>December 8, 2017</span>
                        </div>
                        <div className="episode-link divs">
                            <a href="#">Episode 53: Artist Corner with Justin</a><br />
                            <span>December 8, 2017</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="news divs">
                            <div className="footer-bar"></div>
                            <h4 className="footer-head">NEWSLETTER</h4>
                            <p>Join our digital mailing list and get notified when we release new episodes.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;