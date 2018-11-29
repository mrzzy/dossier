/*
 * components/BlogListing.js
 * Blog Listing Components
*/

import React from 'react';

import "../styles/BlogListing.css";

/* Blog entry component represents a entry in a Blog List.
 * Metadata about the entry is given by the meta prop a JS object which 
 * gives the title, subtitle, timestamp and href of the blog entry
*/
function BlogEntry(props) {
    const meta = props.meta;
    
    /* Format timestamp to date representation of timestamp */
    const timestampDate = new Date(meta.timestamp);
    const timestampStr = timestampDate.toLocaleDateString();

    return (
        <a href={meta.href} className="blog-entry">
            <h3 className="title">{meta.title}</h3>
            <span className="timestamp">{timestampStr}</span>
            <span className="subtitle">{meta.subtitle}</span>
        </a>
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
            const blogEntries = this.state.manifest.map((metadata) => {
                return <BlogEntry meta={metadata} />
            });

            return (
                <div className="blog-list">
                    {blogEntries}
                </div>
            );
        }
                
    }

    /* Lifecycle events */
    componentDidMount() {
        this.loadContents();
    }
}


export default BlogList;
