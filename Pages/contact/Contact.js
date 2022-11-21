import React from 'react';
import "./Contact.css";
import "../../Pages/Home/client/cilent.css";
import { Container, Row, Col } from "react-bootstrap";
import contact from "../../Assets/Images/contact1.png";
import { Link } from 'react-router-dom';
import "../../Layout/headerFotter.css";

const Contact = () => {
    return (
        <>
            <section className="contact">
                <Container>
                    <div className="contacthead">
                        <h2 className="headingboder">Contact</h2>
                        <p>Mauris posuere neque felis, sed mattis diam rutrum eget. Phasellus massa nulla, pretium interdum vehicula sit amet, lobortis eu augue. Fusce a nunc dignissim, varius sem nec, lacinia nulla. </p>
                    </div>
                    <Row>
                        <Col lg={6}>
                            <div className="contactfrom">
                                <div className="getintouch">
                                    <h4>Get in touch</h4>
                                    <p>Feel free to contact us and will get back to you as soon as possible</p>
                                </div>
                                <form>
                                    <div className="contactenterdetail">
                                        <div className="contactentername">
                                            <input type="text" placeholder="First Name" className="nameenter" />
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                        <div className="contactentername">
                                            <input type="text" placeholder="Enter Email Address" className="nameenter" />
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className="message">
                                            <textarea name="entermessage" placeholder='Message' id=""></textarea>
                                        </div>
                                        <div className="submitform">
                                            <Link to="/" className='joinnow'>Send Message</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="contactpageimn">
                                <img src={contact} alt="img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact
