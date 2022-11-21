import { React, useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Blog.css";
import "../client/cilent.css";
import { Container } from 'react-bootstrap';
import Data from "../../../ecofriendly.json";

const Blog = () => {

    const [currentdata, updateddata] = useState();

    const getData = async () => {
        const response = await fetch("https://project.delemontstudio.com/ecofriendly/ecofriendly.json");
        const data = response.json();
        updateddata(data);
    }

    useEffect(() => {
        getData();
    }, [])

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
            500: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        },
    };

    return (
        <>
            <section className="blog">
                <Container>
                    <div className="carouselimages">
                        <div className="ourblog">
                            <h2 className="headingboder">Our Blog</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus
                                finibus, fringilla augue a, ultrices nunc.</p>
                        </div>
                        <OwlCarousel
                            className='owl-theme'
                            items={3}
                            loop
                            margin={30}
                            responsiveClass={true}
                            {...options}
                            // autoplayHoverPause={true}
                            autoplay delayLength={100}
                            autoHeight={true}
                            navText={[
                                `<span class="arrow prev">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.74195 10.501L13.7879 2.45498L11.6669 0.333984L-5.19753e-05 12.001L11.6669 23.668L13.7879 21.547L5.74195 13.501L23.9999 13.501L23.9999 10.501L5.74195 10.501Z" fill="#8392A5"/>
                                    </svg>
                                </span>`,
                                `<span class="arrow next">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.258 13.5L10.212 21.546L12.333 23.667L24 12L12.333 0.332995L10.212 2.45399L18.258 10.5L2.30219e-06 10.5L1.77765e-06 13.5L18.258 13.5Z" fill="#8392A5"/>
                                    </svg>
                                </span>`
                            ]}
                        // slideSpeed={300}
                        >
                            {Data.blog.map((blog) => {

                                const { id, blogimg, meetblog, date } = blog;

                                return (
                                    <>
                                        <div class='item' key={id}>
                                            <>
                                                <div className="blogpartners">
                                                    <img src={blogimg} alt="partners1" />
                                                    <h4> {meetblog} </h4>
                                                    <p> {date} </p>
                                                </div>
                                            </>
                                        </div>
                                    </>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Blog;