import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerlogo from "../Assets/Images/logo.png";
import "./headerFotter.css";

const Fotter = () => {
    return (
        <>
            <footer className="ecoweb">
                <div className="footerborder">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="ecowebfootter">
                                    <div className="footerlogo">
                                        <img src={footerlogo} alt="" />
                                    </div>
                                    <div className="loremfooter">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus finibus, fringilla augue.</p>
                                        <ul>
                                            <li>
                                                <Link to="/">
                                                    <span>
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 0C4.9247 0 0 4.95468 0 11.067C0 16.5905 4.0227 21.1689 9.2818 22V14.2653H6.4878V11.067H9.2818V8.6289C9.2818 5.85553 10.923 4.32386 13.4365 4.32386C14.6399 4.32386 15.8983 4.53967 15.8983 4.53967V7.26214H14.5123C13.145 7.26214 12.7193 8.1154 12.7193 8.99079V11.067H15.7696L15.2823 14.2653H12.7193V22C17.9773 21.17 22 16.5894 22 11.067C22 4.95468 17.0753 0 11 0Z" fill="#8392A5" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <span>
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11 0C13.9887 0 14.3616 0.0109999 15.5342 0.0659999C16.7057 0.121 17.5032 0.3047 18.205 0.5775C18.931 0.8569 19.5426 1.2353 20.1542 1.8458C20.7135 2.39569 21.1463 3.06085 21.4225 3.795C21.6942 4.4957 21.879 5.2943 21.934 6.4658C21.9857 7.6384 22 8.0113 22 11C22 13.9887 21.989 14.3616 21.934 15.5342C21.879 16.7057 21.6942 17.5032 21.4225 18.205C21.1471 18.9396 20.7142 19.6049 20.1542 20.1542C19.6042 20.7134 18.939 21.1461 18.205 21.4225C17.5043 21.6942 16.7057 21.879 15.5342 21.934C14.3616 21.9857 13.9887 22 11 22C8.0113 22 7.6384 21.989 6.4658 21.934C5.2943 21.879 4.4968 21.6942 3.795 21.4225C3.06056 21.1469 2.39528 20.714 1.8458 20.1542C1.28635 19.6044 0.853524 18.9392 0.5775 18.205C0.3047 17.5043 0.121 16.7057 0.0659999 15.5342C0.0142999 14.3616 0 13.9887 0 11C0 8.0113 0.0109999 7.6384 0.0659999 6.4658C0.121 5.2932 0.3047 4.4968 0.5775 3.795C0.85276 3.0604 1.28568 2.39505 1.8458 1.8458C2.39544 1.28615 3.06067 0.853302 3.795 0.5775C4.4968 0.3047 5.2932 0.121 6.4658 0.0659999C7.6384 0.0142999 8.0113 0 11 0ZM11 5.5C9.54131 5.5 8.14236 6.07946 7.11091 7.11091C6.07946 8.14236 5.5 9.54131 5.5 11C5.5 12.4587 6.07946 13.8576 7.11091 14.8891C8.14236 15.9205 9.54131 16.5 11 16.5C12.4587 16.5 13.8576 15.9205 14.8891 14.8891C15.9205 13.8576 16.5 12.4587 16.5 11C16.5 9.54131 15.9205 8.14236 14.8891 7.11091C13.8576 6.07946 12.4587 5.5 11 5.5V5.5ZM18.15 5.225C18.15 4.86033 18.0051 4.51059 17.7473 4.25273C17.4894 3.99487 17.1397 3.85 16.775 3.85C16.4103 3.85 16.0606 3.99487 15.8027 4.25273C15.5449 4.51059 15.4 4.86033 15.4 5.225C15.4 5.58967 15.5449 5.93941 15.8027 6.19727C16.0606 6.45513 16.4103 6.6 16.775 6.6C17.1397 6.6 17.4894 6.45513 17.7473 6.19727C18.0051 5.93941 18.15 5.58967 18.15 5.225ZM11 7.7C11.8752 7.7 12.7146 8.04768 13.3335 8.66655C13.9523 9.28542 14.3 10.1248 14.3 11C14.3 11.8752 13.9523 12.7146 13.3335 13.3335C12.7146 13.9523 11.8752 14.3 11 14.3C10.1248 14.3 9.28542 13.9523 8.66655 13.3335C8.04768 12.7146 7.7 11.8752 7.7 11C7.7 10.1248 8.04768 9.28542 8.66655 8.66655C9.28542 8.04768 10.1248 7.7 11 7.7V7.7Z" fill="#8392A5" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <span>
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21.9989 2.61164C21.175 3.0599 20.3012 3.3543 19.4065 3.48509C20.3495 2.79142 21.0553 1.69972 21.3924 0.413426C20.5074 1.06121 19.5371 1.51519 18.5258 1.76076C17.8465 0.866846 16.9461 0.273998 15.9646 0.0743819C14.9831 -0.125234 13.9755 0.0795672 13.0984 0.656946C12.2213 1.23433 11.5239 2.15193 11.1145 3.26711C10.7052 4.38229 10.6069 5.63257 10.8349 6.82356C9.04015 6.71292 7.2844 6.1393 5.68163 5.13994C4.07885 4.14057 2.66488 2.73781 1.5315 1.02271C1.13032 1.87021 0.919496 2.83362 0.920624 3.81429C0.920624 5.73905 1.71713 7.43948 2.92808 8.43505C2.21145 8.4073 1.51059 8.16927 0.883929 7.74081V7.80983C0.884145 9.09173 1.24481 10.3341 1.90476 11.3263C2.56472 12.3184 3.48335 12.9994 4.50491 13.2536C3.83966 13.4753 3.14211 13.508 2.46507 13.3492C2.75309 14.4526 3.31447 15.4176 4.0706 16.109C4.82672 16.8005 5.73974 17.1838 6.68181 17.2053C5.74551 18.1097 4.67346 18.7783 3.52695 19.1728C2.38044 19.5673 1.18195 19.68 0 19.5044C2.06325 21.1364 4.46508 22.0028 6.91817 22C15.2211 22 19.7616 13.5403 19.7616 6.20365C19.7616 5.96471 19.7562 5.72312 19.7475 5.48684C20.6313 4.70123 21.3941 3.72803 22 2.61297L21.9989 2.61164Z" fill="#8392A5" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <span>
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.617 2.44553C4.61669 3.0938 4.37318 3.71539 3.94004 4.17356C3.5069 4.63173 2.9196 4.88894 2.30735 4.88862C1.69509 4.88829 1.10804 4.63046 0.675328 4.17183C0.242617 3.71321 -0.000305837 3.09136 2.8898e-07 2.44309C0.000306415 1.79482 0.243816 1.17323 0.67696 0.715057C1.1101 0.25689 1.6974 -0.00032383 2.30965 3.0598e-07C2.92191 0.000324441 3.50896 0.25816 3.94167 0.716786C4.37438 1.17541 4.61731 1.79726 4.617 2.44553V2.44553ZM4.68625 6.69863H0.0692552V22H4.68625V6.69863ZM11.9811 6.69863H7.3872V22H11.9349V13.9704C11.9349 9.49736 17.4407 9.08183 17.4407 13.9704V22H22V12.3083C22 4.76762 13.851 5.04872 11.9349 8.75185L11.9811 6.69863V6.69863Z" fill="#8392A5" />
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="quicklinks">
                                    <h6>Quick Linkes</h6>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/aboutus">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="quicklinks">
                                    <h6>Community</h6>
                                    <ul>
                                        <li>
                                            <Link to="/">Events</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Upcoming</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="subscripe">
                                    <h6>Subscibe Now</h6>
                                    <div className="email">
                                        <input type="text" name="email" id="" className="enteremail" placeholder='Enter email Address' />
                                        <span>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.8675 1.06496C25.7518 0.963445 25.5871 0.939893 25.4475 1.00464L0.224768 12.7238C0.0889774 12.787 0.00153343 12.9224 -9.88577e-05 13.0721C-0.00173114 13.2218 0.0828369 13.3592 0.217306 13.4252L7.3553 16.9282C7.48619 16.9925 7.64227 16.978 7.75917 16.8906L14.6993 11.7035L9.251 17.3077C9.17328 17.3877 9.13364 17.4972 9.14219 17.6083L9.68465 24.673C9.6967 24.8295 9.80163 24.9633 9.95079 25.0124C9.99066 25.0255 10.0316 25.0318 10.0721 25.0318C10.1832 25.0318 10.2912 24.9842 10.3664 24.8971L14.155 20.5069L18.8385 22.7447C18.9402 22.7933 19.0579 22.7953 19.1612 22.7504C19.2645 22.7054 19.3431 22.6178 19.3769 22.5104L25.982 1.47357C26.0282 1.32667 25.9832 1.16647 25.8675 1.06496Z" fill="white" />
                                            </svg>
                                        </span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus finibus, fringilla augue a, ultrices nunc. </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="copywrite">
                        <p> 2021 eco friendly web. All Right Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Fotter