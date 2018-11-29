/*
 * pages/BlogPage.js
 * Blog Page
*/

import React from "react"
import BlogList from "../components/BlogListing.js";

import "../styles/BlogPage.css";

/* Blog Page renders the blog section of the site */
function BlogPage(props) {
    return (
        <section className="page" id="blog">
            <h1 className="fancy">writing.</h1>
            <BlogList/>
        </section>
    );
}

export default BlogPage;
