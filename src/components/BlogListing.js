/*
 * components/BlogListing.js
 * Blog Listing Components
*/

import React from 'react';

import "../styles/BlogListing.css";

/* Blog entry component represents a entry in a Blog List.
 * The title is given by a title prop, the summary given by the summary prop.
*/
function BlogEntry(props) {
    return (
        <div className="blog-entry">
            <h2 className="title">{props.title}</h2>
            <span className="summary">{props.summary}</span>
        </div>
    );
}


/* Blog List component display a listing of blog posts based on the 
 * blog /content/blog/manifest.json
*/
class BlogList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            manifest: null
        }

        // Bind callbacks
        this.loadContents = this.loadContents.bind(this);
    }

    /* Load blog manifest with contents and trigger rerender with contents */
    loadContents() {
        fetch("/content/blog/manifest.json")
            .then((response) => response.json())
            .then((manifest) => {
                // trigger render with manifest infomation
                this.setState({
                    manifest: manifest,
                });
            });
    }

    /* Renders loading display if manifest has not yet loaded,
     * otherwise, displays the blog listing from the data in the loaded manifest
    */
    render() {
        if(this.state.manifest === null) {
            // Contents not loaded, render loading display
            console.log("render without manifest...");
            return (
                <div className="blog-list">
                    <div className="container">
                        <span className="loading fancy">Loading&hellip;</span>
                    </div>
                </div>
            );
        } else {
            // Contents has loaded, render blog posts from manifest
            console.log("render with manifest...");
        
            return null;
        }
                
    }

    /* Lifecycle events */
    componentDidMount() {
        this.loadContents();
    }
}


export default BlogList;
