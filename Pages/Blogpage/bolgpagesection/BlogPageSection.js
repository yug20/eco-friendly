import React, { useEffect, useState } from 'react';
import "./BlogPagesection.css";
import "../../../Pages/Home/client/cilent.css";
import "../../../Layout/headerFotter.css";
import { Container, Row, Col } from "react-bootstrap";
// import "../../contact/Contact.css";
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Data from "../../../ecofriendly.json";

const BlogPageSection = () => {

    const [first, setfirst] = useState();

    const getData = async () => {
        const response = await fetch("https://project.delemontstudio.com/ecofriendly/ecofriendly.json");
        const data = await response.json();
        setfirst(data);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <section className="blogpages">
                <Container>
                    <div className="blogpageshead">
                        <h2 className="headingboder">Blog</h2>
                        <p>Mauris posuere neque felis, sed mattis diam rutrum eget. Phasellus massa nulla, pretium
                            interdum vehicula sit amet, lobortis eu augue.  </p>
                    </div>
                    <Row>
                        <Col lg={6}>
                            {Data.blogpage.map((image) => {
                                return (
                                    <>
                                        <div className="blogpageimg" key={image.id}>
                                            <img src={image.blogpage} alt="img" />
                                        </div>
                                    </>
                                )
                            })}
                        </Col>
                        <Col lg={6}>
                            {Data.blogpage.map((detail) => {

                                const { id, meetblogimg, blogmaindiv, blogpagedate, blogpagedetail, className, blogbutton } = detail;

                                return (
                                    <>
                                        <div className={blogmaindiv} key={id}>
                                            <h5> {meetblogimg} </h5>
                                            <span>{blogpagedate}</span>
                                            <p> {blogpagedetail} </p>
                                            <div className="learnmore">
                                                <Link to="/" className={className}> {blogbutton} </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogPageSection

    // < Link to = "/" className = 'joinnow' > Send Message</ >
