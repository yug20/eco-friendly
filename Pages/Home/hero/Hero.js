import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../../Layout/headerFotter.css";
import "./hero.css";
import earth from "../../../Assets/Images/earth.png";
// import { BrowserRouter } from 'browser-router';

const Hero = () => {
    return (
        <>
            <section className="herosection">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="heroinfo">
                                <h1>Save the planet <br />
                                    <span> Eco-friendly websites </span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus finibus, fringilla augue a, ultrices nunc.
                                    Curabitur eget ante placerat, rutrum magna vitae, facilisis ante.</p>
                                <div className="video">
                                    {/* <BrowserRouter> */}
                                    <Link to="/" className='joinnow'>Join Now</Link>
                                    <Link to="/" className='watch'>
                                        <span>
                                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_767)">
                                                    <path d="M16.9999 31.1666C9.17567 31.1666 2.83325 24.8242 2.83325 16.9999C2.83325 9.17567 9.17567 2.83325 16.9999 2.83325C24.8242 2.83325 31.1666 9.17567 31.1666 16.9999C31.1666 24.8242 24.8242 31.1666 16.9999 31.1666ZM15.0478 11.9212C14.9625 11.8643 14.8634 11.8316 14.761 11.8266C14.6587 11.8215 14.5568 11.8444 14.4664 11.8926C14.376 11.9409 14.3004 12.0128 14.2476 12.1006C14.1948 12.1885 14.1668 12.289 14.1666 12.3915V21.6083C14.1668 21.7108 14.1948 21.8114 14.2476 21.8992C14.3004 21.9871 14.376 22.0589 14.4664 22.1072C14.5568 22.1555 14.6587 22.1783 14.761 22.1733C14.8634 22.1682 14.9625 22.1356 15.0478 22.0787L21.9597 17.4717C22.0374 17.4199 22.1011 17.3498 22.1452 17.2675C22.1893 17.1852 22.2124 17.0933 22.2124 16.9999C22.2124 16.9066 22.1893 16.8146 22.1452 16.7323C22.1011 16.65 22.0374 16.5799 21.9597 16.5282L15.0463 11.9212H15.0478Z" fill="#182B49" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_767">
                                                        <rect width="34" height="34" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Watch Video
                                        </span>
                                    </Link>
                                    {/* </BrowserRouter> */}
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="earth">
                                <img src={earth} alt="earth" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hero