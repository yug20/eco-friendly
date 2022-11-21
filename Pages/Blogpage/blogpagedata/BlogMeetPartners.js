import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./BlogMeetPartners.css";
import "../../../Layout/headerFotter.css";
import Data from "../../../ecofriendly.json";
import { Link } from 'react-router-dom';

function BlogMeetPartners() {

    // const [first, setfirst] = useState();
    useEffect(() => {
        fetch("https://project.delemontstudio.com/ecofriendly/ecofriendly.json")
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);
    return (
        <>
            <section className="blogdatadetail">
                <Container>
                    <Row>
                        {
                            Data.blogpagedata.map((curElem) => {

                                const { id, blogimg, meetblog, date, blogpagedatadetail, classNameBlog, bloglearnbutton } = curElem;

                                return (
                                    <>
                                        <Col lg={4} key={id}>
                                            <div className="blogsmallimg">
                                                <img src={blogimg} alt="img" />
                                                <h5> {meetblog} </h5>
                                                <span> {date} </span>
                                                <p> {blogpagedatadetail} </p>
                                                <div className="learnmorebtn">
                                                    <Link to="/" className={classNameBlog}> {bloglearnbutton} </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
    // const getData = async () => {
    //     // const response = await fetch("https://project.delemontstudio.com/ecofriendly/ecofriendly.json");
    //     const data = await response.json();
    //     setfirst(data);
    // }

    // useEffect(() => {
    //     getData();
    // }, [])

    // return (
    //     <>
    //         <section className="blogdatadetail">
    //             <Container>
    //                 <Row>
    //                     {
    //                         Data.blogpagedata.map((curElem) => {

    //                             const { id, blogimg, meetblog, date, blogpagedatadetail, classNameBlog, bloglearnbutton } = curElem;

    //                             return (
    //                                 <>
    //                                     <Col lg={4} key={id}>
    //                                         <div className="blogsmallimg">
    //                                             <img src={blogimg} alt="img" />
    //                                             <h5> {meetblog} </h5>
    //                                             <span> {date} </span>
    //                                             <p> {blogpagedatadetail} </p>
    //                                             <Link to="/" className={classNameBlog}> {bloglearnbutton} </Link>
    //                                         </div>
    //                                     </Col>
    //                                 </>
    //                             )
    //                         })
    //                     }
    //                 </Row>
    //             </Container>
    //         </section>
    //     </>
    // )
}

export default BlogMeetPartners;
