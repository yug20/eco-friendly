import React from 'react';
import { Container } from "react-bootstrap";
import "../../Home/planing/Planing.css";
import "./founder.css";

const Founder = () => {
    return (
        <>
            <section className="founder">
                <Container>
                    <div className="founderdetail">
                        <div className="founderhead">
                            <h2 className='wedoit'>Note from our founder</h2>
                            <p>I have a vision to transform the lives of people through sustainable and responsible innovation, resulting in a positive meaningful
                                impact on both people and the environment. I focus on the intersection of sustainability and technology, and collaborate with stakeholders
                                across the spectrum from business, investment, industry, advocacy groups and academics.</p>
                        </div>
                        <div className="palner">
                            <h2>“The greatest threat to our planet is the belief that someone else will save it.” </h2>
                            <p>-  Robert Swan</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Founder;