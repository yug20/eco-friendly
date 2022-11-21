import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Route, Router, Routes, Switch, Routers } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom'
import Header from '../../src/Layout/Header.js';
import Fotter from '../Layout/Fotter.js';
// import AboutUs from '../Pages/aboutus/Shane/Shane.js';
import DesignDevlopment from "./DesignDevlopment.js";
import AboutUs from "./AboutUs.js";
// import Hero from '../Home/hero/Hero.js';
import Home from './Home.js';
import PortfolioPage from './PortfolioPage.js';
import ContactPages from './ContactPages.js';
import BlogPages from './BlogPages.js';
import RReact from '../Pages/portfoliopagein/button/React.js';

const RouterLink = () => {

    return (
        <>
            <Header></Header>
            {/* <Home /> */}
            {/* <BrowserRouter> */}
            <Routes>
                {/* <Switch> */}
                <Route exact path="/" element={<Home />} />
                <Route exact path="/aboutus" element={<AboutUs />} />
                <Route exact path="/designdevlopment" element={<DesignDevlopment />} />
                <Route exact path="/portfolio" element={<RReact />} />
                <Route exact path="/blog" element={<BlogPages />} />
                <Route exact path="/contact" element={<ContactPages />} />
                {/* <Home></Home> */}
                {/* <AboutUs></AboutUs> */}
                {/* </Switch> */}
            </Routes>
            {/* </BrowserRouter> */}
            <Fotter></Fotter>
        </>
    );
}

export default RouterLink;