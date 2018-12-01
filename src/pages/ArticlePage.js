/*
 * pages/ArticlePage.js
 * Article Page
*/

import React from 'react';
import Showdown from 'showdown';
import "../styles/ArticlePage.css";

/* Article Page renders and displays a specific blog article for reading,
 * given the entry meta given by the meta tag */
class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        
        // Setup object state
        this.state = {
            content: null
        };
        // Bind callbacks
        this.loadContent = this.loadContent.bind(this);
    }

    /* Load article content using AJAX and trigger render with content */
    loadContent() {
        const entry = this.props.entry;
        // Fetch content using AJAX
        fetch(entry.href)
            .then((response) => response.text())
            .then((content) => {
                // Convert markdown to HTML for later rendering
                const convertor = new Showdown.Converter({tables: true});
                const contentHTML = convertor.makeHtml(content);

                //.Trigger rerender with content
                this.setState({ "content": contentHTML });
            });
    }

    /* Render the article page with the entry content or render loading screen 
    */
    render() {
        // Check if article content already loaded
        if(this.state.content == null) 
        {
            // Render Loading page
            return (
                <section id="article" className="page">
                    <div className="container">
                        <h3 className="loading fancy">Loading&hellip;</h3>
                    </div>
                </section>
            );
        } else {
            const entry = this.props.entry

            // Generate components for table of contents listing
            const contentsListing = entry.contents_table.map((listing) => (
                <li className="listing" key={listing}> {listing} </li>)
            );

            // Render article with content entry
            return (
                <section id="article" className="page">
                    <div className="sidebar">
                        <h4 className="fancy">{entry.title}</h4>
                        <ul className="contents-table">
                            {contentsListing}
                        </ul>
                    </div>  
                    <div className="content-wrapper">
                        <div className="content" 
                            dangerouslySetInnerHTML={{__html: this.state.content}}>
                        </div>
                    </div>
                </section>
            );
        }
    }

    // Lifecycle events
    componentDidMount() {
        this.loadContent();
    }
}

export default ArticlePage;
