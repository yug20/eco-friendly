import React from 'react';
import "../../Home/client/cilent.css";
import "./shane.css";
import { Container, Row, Col } from "react-bootstrap";
import about from '../../../../src/ecodata.json';
import "../founder/founder.css";
import "../../contact/Contact.css";

const Shane = () => {
    return (
        <>
            <section className="anoutus">
                <Container>
                    <div className="aboutushead">
                        <h2 className="headingboder">About Us</h2>
                        <p>Mauris posuere neque felis, sed mattis diam rutrum eget. Phasellus massa nulla, pretium interdum vehicula sit amet, lobortis eu augue.  Donec maximus ultricies enim nec placerat. </p>
                    </div>
                    <Row>
                        <Col lg={5}>
                            {about.about.map((img) => {
                                return (
                                    <>
                                        <div className="shaneman" key={img.id}>
                                            <img src={img.manimg} alt="IMAGES" />
                                            <h2> {img.herath} </h2>
                                        </div>
                                    </>
                                );
                            })}
                        </Col>
                        <Col lg={7}>
                            <div className="pageview">
                                {about.aboutpara.map((para) => {
                                    return (
                                        <>
                                            <div className="higly" key={para.id}>
                                                <p> {para.paragraps} </p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                    <div className="applying">
                        <p>Applying sustainable user experience and development practices, we generate awareness on the concept of 'eco-friendly websites',
                            develop eco-friendly low-carbon websites for not-for-profits and sustainability focused organisations. We have also developed a new
                            standard for eco-friendly websites so that site owners can display a badge that shows the low-carbon measurement letting their stakeholders
                            know that they not only care about the environment but have reduced their carbon footprint on their website too.</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Shane