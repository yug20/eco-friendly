import React from 'react';
import "./Planing.css";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Plan from "../../../../src/ecofriendly.json";
// import palningblub from "../../../ecofriendly.json"
// import "../../../Assets/Images";/
// import img1 from "../../../Assets/Images/planing1.png";

const Planing = () => {

    const [currentdata, updateddata] = useState();

    const getData = async () => {
        const response = await fetch("https://project.delemontstudio.com/ecofriendly.json");
        const data = await response.json();
        updateddata(data.ecofriendly);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <section className="Planing">
                <Container>
                    <div className="mainplaning">
                        <div className="howdo">
                            <h2 className="wedoit">
                                How do we do it ?
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus finibus, fringilla augue a, ultrices nunc. Curabitur eget ante
                                placerat, rutrum magna vitae, facilisis ante.</p>
                        </div>
                        <Row>
                            {/* <div className="planingdata">
                                <span className="blub">
                                    <img src="" alt="blub" />
                                </span>
                                <h4></h4>
                                <p></p>
                                <Link to="/"></Link>
                            </div> */}
                            {Plan.Planning.map((data) => {
                                return (
                                    <Col lg={4} key={data}>
                                        <div className="planingdata">
                                            <span className={data.className}>
                                                <img src={data.palningblub} alt="images" />
                                            </span>
                                            <h4> {data.title} </h4>
                                            <p> {data.description} </p>
                                            {/* <Link></Link> */}
                                            <Link to="/" className={data.seemoreclass}>
                                                See more
                                                <span className="next">
                                                    <svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M23.172 7.00005L17.808 1.63605L19.222 0.222046L27 8.00005L19.222 15.778L17.808 14.364L23.172 9.00005H0V7.00005H23.172Z" fill="#2061B6" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Planing
