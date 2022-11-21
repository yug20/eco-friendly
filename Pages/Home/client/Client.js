import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./cilent.css";
import Data from "../../../ecofriendly.json";
import { Link } from 'react-router-dom';

const Client = () => {

    const [currentdata, updateddata] = useState([]);

    const getDataClient = async () => {
        const response = await fetch("https://project.delemontstudio.com/ecofriendly/ecofriendly.json");
        const dataClient = await response.json();
        updateddata(dataClient.ecofriendly);
    }

    useEffect(() => {
        getDataClient();
    }, []);


    return (
        <>
            <section className="client">
                <Container>
                    <Row>
                        <div className="clientdetail">
                            <div className="sayclient">
                                <h2 className="headingboder">What’s Our Client Say Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Quisque ut risus finibus, fringilla</p>
                            </div>
                            <Row>
                                {Data.clientdata.map((client) => {
                                    return (
                                        <>
                                            <Col lg={3} key={client.id}>
                                                <div className={client.className1}>
                                                    <div className="clientimages">
                                                        <img src={client.images} alt="client" />
                                                    </div>
                                                    <h3> {client.heading} </h3>
                                                    <h6 className={client.regioncolor}> {client.region} </h6>
                                                    <p> {client.client} </p>
                                                </div>
                                            </Col>
                                        </>
                                    )
                                })}
                                <div className="seebtn">
                                    <Link to="/">See more</Link>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Client
