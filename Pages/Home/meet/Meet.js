import React from 'react'
import { Container } from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import partners1 from "../../../Assets/Images/partners1.png";
import partners2 from "../../../Assets/Images/partners2.png";
import partners3 from "../../../Assets/Images/partners3.png";
import partners4 from "../../../Assets/Images/partners4.png";
import partners5 from "../../../Assets/Images/partners5.png";
import "./meet.css";
import "../client/cilent.css"

const Meet = () => {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,

            }
        },
    };

    return (
        <>
            <section className="meet">
                <Container>
                    <div className="partners">
                        <div className="meetpartners">
                            <h2 className='headingboder'>Meet with Our Partners</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus finibus, fringilla augue a, ultrices nunc. Curabitur eget
                                ante placerat, rutrum magna vitae, facilisis ante.</p>
                        </div>
                        <OwlCarousel
                            className='owl-theme'
                            items={5}
                            loop
                            margin={10}
                            autoplay
                            delayLength={1000}
                            center={true}
                            {...options}
                        >
                            <div class='item'>
                                <>
                                    <div className="partners groth1">
                                        <img src={partners1} alt="partners1" />
                                    </div>
                                </>
                            </div>
                            <div class='item'>
                                <>
                                    <div className="partners groth2">
                                        <img src={partners2} alt="partners1" />
                                    </div>
                                </>
                            </div>
                            <div class='item'>
                                <>
                                    <div className="partners groth3">
                                        <img src={partners3} alt="partners1" />
                                    </div>
                                </>
                            </div>
                            <div class='item'>
                                <>
                                    <div className="partners groth4">
                                        <img src={partners4} alt="partners1" />
                                    </div>
                                </>
                            </div>
                            <div class='item'>
                                <>
                                    <div className="partners groth5">
                                        <img src={partners5} alt="partners1" />
                                    </div>
                                </>
                            </div>
                        </OwlCarousel>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Meet
