import React from 'react';
import Blog from '../Pages/Home/blog/Blog.js';
import Client from '../Pages/Home/client/Client.js';
// import { Route, Routes } from 'react-router-dom'
import Hero from '../Pages/Home/hero/Hero.js';
import Meet from '../Pages/Home/meet/Meet.js';
import Planing from '../Pages/Home/planing/Planing.js';
import Portfolio from '../Pages/Home/portfolio/Portfolio.js';

const Home = () => {
    return (
        <>
            <Hero />
            <Planing />
            <Client />
            <Meet />
            <Portfolio />
            <Blog />
        </>
    )
}

export default Home