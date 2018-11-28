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
            <div Class="showcase">
                <div Class="container">
                    {props.children}
                </div>
                <div Class="container">
                    <div Class="caption">
                        <h1 Class="fancy">{props.title}</h1>
                        <span Class="description">{props.description}</span>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div Class="showcase">
                <div Class="container">
                    <div Class="caption">
                        <h1 Class="fancy">{props.title}</h1>
                        <span Class="description">{props.description}</span>
                    </div>
                </div>
                <div Class="container">
                    {props.children}
                </div>
            </div>
        );
    }
}

export default Showcase;
