import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import "./protfolioapi.js";
import portfolio1 from "../../../Assets/Images/portfolio1.png";
import portfolio2 from "../../../Assets/Images/portfolio2.png";
import portfolio3 from "../../../Assets/Images/portfolio3.png";
import portfolio4 from "../../../Assets/Images/portfolio4.png";
import { Link } from 'react-router-dom';
import "./portfolio.css";
import "../client/cilent.css";
// import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Portfolio = () => {

    return (
        <>
            <section className="portfolio">
                <Container>
                    <div className="ourportfolio">
                        <h2 className="headingboder">Our Portfolio</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus finibus, fringilla augue a, ultrices nunc. Curabitur eget ante placerat, rutrum </p>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <div className="valuation">
                                <ScrollAnimation animateIn="fadeIn">
                                    <img src={portfolio1} alt="port" />
                                </ScrollAnimation>
                                <h2> Bancakan - Mobile Valuation Page </h2>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="valuation">
                                <ScrollAnimation animateIn="fadeIn">
                                    <img src={portfolio2} alt="port" />
                                </ScrollAnimation>
                                <h2> Digital Agency Landing Page </h2>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className="valuation">
                                <ScrollAnimation animateIn="fadeIn">
                                    <img src={portfolio3} alt="port" />
                                </ScrollAnimation>
                                <h2> Reddy Living - Unused Logo Concept </h2>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="valuation">
                                <ScrollAnimation animateIn="fadeIn">
                                    <img src={portfolio4} alt="port" />
                                </ScrollAnimation>
                                <h2> Cafe - Illustration </h2>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry </p>
                            </div>
                        </Col>
                    </Row>
                    <div className="seeportfoli">
                        <Link to="/">See More Portfolio</Link>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Portfolio
