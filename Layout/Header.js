import React from 'react';
import { Navbar, Container, Nav, Form } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import logo from "../Assets/Images/logo.png";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './headerFotter.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" navbar-toggler"
                            style={{ maxHeight: '100%' }}
                            navbarScroll
                        >
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <Link to="/" exact className="home">Home</Link>
                            <Link to="/aboutus" exact className="home">About</Link>
                            <Link to="/designdevlopment" exact className="home">Web Design & Development </Link>
                            <Link to="/portfolio" exact className="home">Portfolio</Link>
                            <Link to="/blog" exact className="home">Blog</Link>
                            <Link to="/contact" exact className="home">Contact</Link>
                            {/* <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                            <NavLink to="/aboutus" exact className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
                            <NavLink to="/designdevlopment" exact className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Web Design & Development </NavLink>
                            <NavLink to="/portfolio" exact className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Portfolio</NavLink>
                            <NavLink to="/blog" exact className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Blog</NavLink>
                            <NavLink to="/contact" exact className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink> */}
                        </Nav>

                        <Form className='join'>
                            <Nav.Link to="/" className='joinnow'>
                                Join Now
                            </Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header
