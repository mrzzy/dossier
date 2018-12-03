/*
 * components/ArticleListing.js
 * Article Listing Components
*/

import React from 'react';
import {Link} from "react-router-dom";

import "../styles/ArticleListing.css";
import ArticleEntryBackground from "../assets/article_entry@2x.png";

/* Article entry component represents a entry in a article List.
 * Metadata about the entry is given by the meta prop a JS object which 
 * gives the title, subtitle, timestamp and href of the article entry
*/
function ArticleEntry(props) {
    const meta = props.meta;
    
    /* Format timestamp to date representation of timestamp */
    const timestampDate = new Date(meta.timestamp);
    const timestampStr = timestampDate.toLocaleDateString();

    return (
        <Link to={"/article/" + meta.id} className="article-entry">
            <img className="background" alt="background" src={ArticleEntryBackground}/>
            <div className="content">
                <h3 className="title">{meta.title}</h3>
                <span className="timestamp fancy">{timestampStr}</span>
                <span className="subtitle">{meta.subtitle}</span>
            </div>
        </Link>
    );
}

/* Article List component display a listing of article posts based on the 
 * article /content/article/manifest.json
*/
class ArticleListing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            manifest: null
        }

        // Bind callbacks
        this.loadContents = this.loadContents.bind(this);
    }

    /* Load article manifest with contents and trigger rerender with contents */
    loadContents() {
        fetch("/content/article/manifest.json")
            .then((response) => response.json())
            .then((manifest) => {
                // trigger render with manifest infomation
                this.setState({
                    manifest: manifest,
                });
            });
    }

    /* Renders loading display if manifest has not yet loaded,
     * otherwise, displays the article listing from the data in the loaded manifest
    */
    render() {
        if(this.state.manifest === null) {
            // Contents not loaded, render loading display
            return (
                <div className="article-list">
                    <div className="container">
                        <span className="loading fancy">Loading&hellip;</span>
                    </div>
                </div>
            );
        } else {
            // Contents has loaded, render article posts from manifest
            const articleEntries = this.state.manifest.map((metadata) => {
                return <ArticleEntry meta={metadata} />
            });

            return (
                <div className="article-list-wrapper">
                    <div className="article-list">
                        {articleEntries}
                    </div>
                </div>
            );
        }
                
    }

    /* Lifecycle events */
    componentDidMount() {
        this.loadContents();
    }
}


export default ArticleListing;
