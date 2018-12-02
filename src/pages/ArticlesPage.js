/*
 * pages/ArticlesPage.js
 * Articles Page
*/

import React from "react"
import ArticleListing from "../components/ArticleListing.js";

import "../styles/ArticlesPage.css";

/* Articles Page renders the listing of articles available for viewing */
function ArticlesPage(props) {
    return (
        <section className="page" id="blog">
            <h1 className="fancy">writing.</h1>
            <ArticleListing/>
        </section>
    );
}

export default ArticlesPage;
