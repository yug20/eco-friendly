import { React, useEffect, useState } from 'react';
import "../../Home/client/cilent.css";
import "./designdevelop.css";
import { Container, Row, Col } from "react-bootstrap";
import Data from "../../../ecofriendly.json";
import "../../contact/Contact.css";

const DesignDevelop = () => {

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
            <section className="web">
                <Container>
                    <div className="Webdelop">
                        <h2 className='headingboder'>Web Design & Development</h2>
                        <p>Mauris posuere neque felis, sed mattis diam rutrum eget. Phasellus massa nulla, pretium interdum vehicula sit amet,
                            lobortis eu augue. Fusce a nunc dignissim, varius sem nec, lacinia nulla. Donec maximus ultricies enim nec placerat. </p>
                    </div>
                    <div className="proven">
                        <h4>Our proven process.. How do we do it?</h4>
                        <Row>
                            <Col lg={6}>
                                {
                                    Data.webdevelopment1.map((develop) => {
                                        return (
                                            <>
                                                <div className="devloppalning" key={develop.id}>
                                                    <img src={develop.palning1} alt="img" />
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </Col>
                            <Col lg={6}>
                                {
                                    Data.webplaning1.map((develop2) => {
                                        return (
                                            <>
                                                <div className={develop2.className1} key={develop2.id}>
                                                    <h5> {develop2.webtitle1} </h5>
                                                    <p> {develop2.webdetail1} </p>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default DesignDevelop;