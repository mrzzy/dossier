/*
 * components/ArticleContents.js
 * Article Listing and Article Contents components
 * Dossier
*/

import React from 'react';

import "../styles/ArticleContents.css";

/* Article Listing displays a single listing in the Article Contents
 * Listing infomation is provided by the listing prop
*/
class ArticleListing extends React.Component {
    constructor(props) {
        super(props);
        // Bind callback
        this.jumpTo = this.jumpTo.bind(this);
        this.focusReading = this.focusReading.bind(this);
    }
    
    /* Jump to the part of the article that this listing references */
    jumpTo() {
        // Retrieve the target that the listing references
        const listing = this.props.listing;
        const target = document.getElementById(listing.id);
    
        // Teleport the user to the target
        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    
    /* Focus this listing if currently reading, scrolling to center it in the 
     * viewport 
     */
    focusReading() {
        if(this.props.reading === true){
            const listing = this.props.listing;
            const element = document.getElementById("listing-" + listing.id);
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        }
    }
        
    
    /* Render the listing component */
    render() {
        const listing = this.props.listing;
        // Setup classnames based on currenting reading or 
        var classes = (this.props.reading === true) ? "reading" : "";
        classes = classes + " level-" + listing.level;
        
        return  (
            <li id={"listing-" + listing.id}
                className={"listing " + classes}
                onClick={this.jumpTo} >
                {listing.title}
            </li>
        );
    }

    // Lifecycle events
    componentDidMount() {
        window.addEventListener("scroll", this.focusReading);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.focusReading);
    }
}
/* Article Contents displays a table of contents listing based on the 
 * contents infomation given by the content s compnonent
*/
class ArticleContents extends React.Component {
    constructor(props) {
        super(props);
        // Setup object state
        if(this.props.contents.length > 0) {
            // When page loads, user is reading the first listing
            const readingListing = props.contents[0];
            this.state = {
                readingID: readingListing.id
            }
        } else {
            this.state = {
                readingID: null,
            }
        }
        
        // Bind callbacks
        this.checkReading = this.checkReading.bind(this);
    }
    
    /* Check if the given element is in viewport */
    checkViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

        return (vertInView && horInView);
    }

    /* Check which listing the user is currently reading,
     * Triggering a rerender by updating readingID when the user moves onto 
     * another listing
    */
    checkReading() {
        // Make a reversed contents listing copy
        // So that when multiple listings are in the viewport
        // The listing with the lower position in the contents array will
        // be marked as currently reading
        const contents = this.props.contents.slice().reverse();
        
        // Maintain previous reading ID if user not reading new listing
        var readingID = this.state.readingID;
        contents.forEach((listing) => {
            // Check if user reading current listing by checking in viewport 
            // position
            const element = document.getElementById(listing.id);
            if(element === null) console.log(listing.id);
            if(this.checkViewport(element)) {
                readingID = listing.id;
            }
        });

        // Trigger rerender if user reading different listing
        if(readingID !== this.state.readingID) {
            this.setState({ "readingID": readingID });
        }
    }

    /* Render the articles table of contents */
    render() {
        // Generate Listing components for listing in contents
        const listingComponents = this.props.contents.map((listing) => {
            const isReading = listing.id === this.state.readingID;
            return (
                <ArticleListing listing={listing} reading={isReading} 
                    key={listing.id}
                />
            );
        });
    
        return (
            <ul className="article-contents">
                {listingComponents}
            </ul>
        );
    }

    // Lifecycle Events 
    componentDidMount() {
        window.addEventListener("scroll", this.checkReading);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.checkReading);
    }
}

export default ArticleContents;
