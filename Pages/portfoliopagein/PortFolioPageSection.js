import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import Navbar from "./Nav.js";
import "./PortFolio.css";
// import PortFolioDataCode from './PortFolioDataCode.js';
import "../contact/Contact.css";
// import PortFolioDataCode from './PortFolioDataCode';

const PortFolioPageSection = ({ menuData }) => {
    // console.log(menuData);
    return (
        <>
            <section className="portfoliopage">
                <Container>
                    <div className="nequreportfoliop">
                        <div className="portfoliopageheading">
                            <h2 className="headingboder">Portfolio</h2>
                            <p>Mauris posuere neque felis, sed mattis diam rutrum eget. Phasellus massa nulla, pretium interdum vehicula sit amet, lobortis eu augue. Fusce a nunc dignissim, varius sem nec, lacinia nulla. Donec maximus ultricies enim nec placerat. </p>
                        </div>
                        {/* <PortFolioDataCode /> */}
                        {/* <button class="btn-group__item"> Digital Agency Landing Page</button> */}
                        <Row>
                            {menuData.map((curElem) => {

                                const { id, image } = curElem;

                                return (
                                    <>
                                        <Col lg={6} key={id}>
                                            <div className="portfoliopageimages">
                                                <img src={image} alt="img" />
                                            </div>
                                        </Col>
                                    </>
                                )
                            })}
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PortFolioPageSection
