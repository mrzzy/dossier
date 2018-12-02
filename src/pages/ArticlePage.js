/*
 * pages/ArticlePage.js
 * Article Page
*/

import React from 'react';
import Markdown from 'markdown-it';
import MarkdownKatex from 'markdown-it-katex';
import MarkdownHeaderID from 'markdown-it-named-headings';
import HighlightJS from 'highlight.js';
import 'highlight.js/styles/solarized-light.css';

import ArticleContents from "../components/ArticleContents.js";

import "../styles/ArticlePage.css";

/* Article Page renders and displays a specific article for reading,
 * given the entry given by the entryID prop */
class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        
        // Setup object state
        this.state = {
            entry: null,
            content: null
        };
        // Bind callbacks
        this.loadMetadata = this.loadMetadata.bind(this);
        this.loadContent = this.loadContent.bind(this);
    }

    /* Loads entry metadata for the  entryID url param using AJAX
     * syncronously and returns the metadata
    */
    async loadMetadata()  {
        // Fetch article manifest
        const response = await fetch("/content/article/manifest.json");
        const manifest = await response.json();
        // Find metadata for entry specified by entryID
        const entryID = this.props.match.params.entryID;
        const entry = manifest.find((entry) => entry.id === entryID);

        return entry;
    }



    /* Load article content using AJAX and trigger render with content */
    loadContent() {
        this.loadMetadata().then((entry) => {
            // Fetch content using AJAX
            fetch(entry.href)
                .then((response) => response.text())
                .then((content) => {
                    console.log(content);
                    //.Trigger rerender with content
                    this.setState({ 
                        "entry": entry,
                        "content": content
                    });
                });
        });
    }

    /* Render the given markdown content for display as the article content
     * Converts the markdown to HTML, with table and latex rendering
     * Applies syntax highlight to code blocks
    */
    renderContent(content) {
        // Configure markdown convertor
        // Add support for latex expressions 
        const convertor = Markdown();
        convertor.use(MarkdownKatex);
        // Add support for header ids
        convertor.use(MarkdownHeaderID);
    
        // Convert markdown to html
        var contentHTML = convertor.render(content);
        
        // Highlight article code blocks with syntax highlighting 
        const parser = new DOMParser();
        const contentDocument = parser.parseFromString(contentHTML, "text/html");
        console.log(contentDocument);
        const codeNodes = contentDocument.querySelectorAll("pre code");
        codeNodes.forEach((node) => HighlightJS.highlightBlock(node));
        contentHTML = contentDocument.documentElement.outerHTML;

        return contentHTML;
    }

    /* Render the article page with the entry content or render loading screen */
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
            const entry = this.state.entry

            // Render article with content
            const contentHTML = this.renderContent(this.state.content);
            return (
                <section id="article" className="page">
                    <div className="sidebar">
                        <h4 className="fancy">{entry.title}</h4>
                        <ArticleContents contents={entry.contents} />
                    </div>  
                    <div className="content-wrapper">
                        <div className="content" 
                            dangerouslySetInnerHTML={{__html: contentHTML}}>
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
