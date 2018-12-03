/*
 * pages/ArticlesPage.js
 * Articles Page
*/

import React from "react"
import ArticleListing from "../components/ArticleListing.js";
import Navbar from "../components/Navbar.js";

import "../styles/ArticlesPage.css";

/* Articles Page renders the listing of articles available for viewing */
function ArticlesPage(props) {
    return (
        <section className="page" id="articles">
            <Navbar selected="articles"/>
            <h1 className="fancy">articles.</h1>
            <ArticleListing/>
        </section>
    );
}

export default ArticlesPage;
