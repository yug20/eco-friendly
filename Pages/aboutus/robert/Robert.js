import React from 'react';
import "./robert.css";
import { Container, Row, Col } from "react-bootstrap";
import about from "../../../../src/ecodata.json";

const Robert = () => {
    return (
        <>
            <section className="robert">
                <Container>
                    <Row>
                        <Col lg={7}>
                            {about.togetherare.map((togetherpars) => {
                                return (
                                    <>
                                        <div className="shaneman" key={togetherpars.id}>
                                            <p>{togetherpars.together}</p>
                                        </div>
                                    </>
                                );
                            })}
                            <div className="wearetogether">
                                <h5>Together, we can!</h5>
                            </div>
                        </Col>
                        <Col lg={5}>
                            {about.robertimgdata.map((robert) => {
                                return (
                                    <>
                                        <div className="robertshaneman" key={robert.id}>
                                            <img src={robert.robertimg} alt="img" />
                                            <h5> {robert.swan} </h5>
                                        </div>
                                    </>
                                );
                            })}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Robert;