import { React, useEffect, useState } from 'react';
import "./Html.css";
import { Container, Row, Col } from "react-bootstrap";
import Data from "../../../ecofriendly.json";

const Html = () => {
    const [currentdata, updateddata] = useState();

    const getData = async () => {
        const response = await fetch("https://project.delemontstudio.com/ecofriendly/ecofriendly.json");
        const data = response.json();
        updateddata(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <section className="htmldevlop">
                <Container>
                    <Row>
                        <Col lg={6}>
                            {
                                Data.webdevelopment3.map((hmtl1) => {
                                    return (
                                        <>
                                            <div className="devloppalning" key={hmtl1.id}>
                                                <img src={hmtl1.palning3} alt="img" />
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={6}>
                            {
                                Data.webplaning.map((html2) => {
                                    return (
                                        <>
                                            <div className={html2.className3} key={html2.id}>
                                                <h5> {html2.webtitle3} </h5>
                                                <p> {html2.webdetail3} </p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Html