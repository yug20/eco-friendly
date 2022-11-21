import { React, useEffect, useState } from 'react';
import "./design.css";
import { Container, Row, Col } from "react-bootstrap";
import Data from "../../../ecofriendly.json";

const Design = () => {
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
            <section className="webdesign">
                <Container>
                    <Row>
                        <Col lg={6}>
                            {
                                Data.webplaning2.map((develop2) => {
                                    return (
                                        <>
                                            <div className={develop2.className2} key={develop2.id}>
                                                <h5> {develop2.webtitle2} </h5>
                                                <p> {develop2.webdetail2} </p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Col>
                        <Col lg={6}>
                            {
                                Data.webdevelopment2.map((develop) => {
                                    return (
                                        <>
                                            <div className="devloppalning" key={develop.id}>
                                                <img src={develop.palning2} alt="img" />
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

export default Design