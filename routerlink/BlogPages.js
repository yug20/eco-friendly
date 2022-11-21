import React from 'react';
// import BlogPage from '../Pages/Blogpage/BlogPage.js';
// import BlogPage from '../Pages/Blogpage/bolgpagesection/BlogPageSection.js';
import BlogPageSection from "../Pages/Blogpage/bolgpagesection/BlogPageSection.js";
import BlogMeetPartners from '../Pages/Blogpage/blogpagedata/BlogMeetPartners.js';
import "../Layout/headerFotter.css";

const BlogPages = () => {
    return (
        <>
            <BlogPageSection />
            <BlogMeetPartners />
        </>
    )
}

export default BlogPages
