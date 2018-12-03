/*
 * components/Showcase.js
 * Showcase Component
*/

import React from 'react';

import  "../styles/Showcase.css";

/* Showcase component showcases the given component prop with the title given
 * by the title prop and description given by the description prop.
 * The orientation specifies where the text would be on the left or right k
 * with respect to the image. By default, left orientation would be used.
*/
function Showcase(props) {
    // Position contents based on orientation prop
    if(props.orientation === "right"){
        return (
            <div className={"showcase " + props.orientation}>
                <div className="container">
                    {props.children}
                </div>
                <div className="container">
                    <div className="caption">
                        <h1 className="fancy">{props.title}</h1>
                        <span className="description">{props.description}</span>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={"showcase " + props.orientation}>
                <div className="container">
                    <div className="caption">
                        <h1 className="fancy">{props.title}</h1>
                        <span className="description">{props.description}</span>
                    </div>
                </div>
                <div className="container">
                    {props.children}
                </div>
            </div>
        );
    }
}

export default Showcase;
