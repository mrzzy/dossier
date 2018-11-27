/*
 * pages/LandingPage.js
 * Landing Page
*/

import React from 'react';

import "../styles/LandingPage.css";
import DevImage from "../assets/landing_laptop.jpg";

/* Landing Page component displays the landing page */
function LandingPage() {
    return (
        <section id="landing" class="page">
            <div class="container">
                <div class="tagline">
                    <h1 class="fancy"> making and breaking. </h1>
                    est. 2014 
                </div>
            </div>
            <img src={DevImage} alt="software development"/>
        </section>
    );

}

export default LandingPage;
