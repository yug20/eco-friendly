import React, { useState } from 'react';
import AllData from './AllData';
import { Container, Row, Col } from "react-bootstrap";
import './React.css';

function RReact() {

    const [images, setImage] = useState(AllData)

    const allItem = () => {
        const finalData = AllData.filter((value) => {
            return value;
        })
        setImage(finalData)
    }

    const onlyPython = (categoryItem) => {
        const finalData = AllData.filter((value) => {
            return value.category === categoryItem
        })

        setImage(finalData)
    }
    const onlyOffice = (categoryItem) => {
        const finalData = AllData.filter((value) => {
            return value.category === categoryItem
        })

        setImage(finalData)
    }
    const onlyReact = (categoryItem) => {
        const finalData = AllData.filter((value) => {
            return value.category === categoryItem
        })
        setImage(finalData)
    }

    return (
        <>
            <section className="portfoliopage">
                <Container>
                    <div className="nequreportfoliop">
                        <div className="portfoliopageheading">
                            <h2 className="headingboder">Portfolio</h2>
                            <p>Mauris posuere neque felis, sed mattis diam rutrum eget. Phasellus massa nulla, pretium interdum vehicula sit amet, lobortis eu augue. Fusce a nunc dignissim, varius sem nec, lacinia nulla. Donec maximus ultricies enim nec placerat. </p>
                        </div>

                        <div className="imagesgallery" >
                            <Row>
                                <Col md={12}>
                                    <div className="activebtnomly">
                                        <button className='btngallery active' onClick={allItem}>All</button>
                                        <button className='btngallery' onClick={() => onlyPython('Bancakan - Mobile Valuation Page')}>Bancakan - Mobile Valuation Page</button>
                                        <button className='btngallery' onClick={() => onlyOffice('Digital Agency Landing Page')}>Digital Agency Landing Page</button>
                                        <button className='btngallery' onClick={() => onlyReact('Reddy Living - Unused Logo Concept')}>Reddy Living - Unused Logo Concept</button>
                                        <button className='btngallery' onClick={() => onlyReact('Cafe - Illustration')}>Cafe - Illustration</button>
                                    </div>
                                </Col>
                            </Row>
                            {/* <button className='btngallery active' onClick={allItem}>All</button>
                            <button className='btngallery' onClick={() => onlyPython('Bancakan - Mobile Valuation Page')}>Bancakan - Mobile Valuation Page</button>
                            <button className='btngallery' onClick={() => onlyOffice('Digital Agency Landing Page')}>Digital Agency Landing Page</button>
                            <button className='btngallery' onClick={() => onlyReact('Reddy Living - Unused Logo Concept')}>Reddy Living - Unused Logo Concept</button>
                            <button className='btngallery' onClick={() => onlyReact('Cafe - Illustration')}>Cafe - Illustration</button> */}
                        </div>

                        <div className="gallery">
                            <Row>
                                {
                                    images.map((value) => {
                                        return (
                                            <Col lg={6} md={5}>
                                                <div className="portfoliopageimages">
                                                    <img src={value.image} className='img-fluid' alt="image" />
                                                </div>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                        </div>
                        {/* {
                            images.map((value) => {
                                return (
                                    <div className="col mt-3">
                                        <img src={value.image} className='img-fluid' alt="image" />
                                    </div>
                                );
                            })
                        } */}
                    </div>
                </Container>
            </section>
        </>
    );
}

export default RReact;