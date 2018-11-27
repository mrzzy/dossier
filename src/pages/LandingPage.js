/*
 * pages/LandingPage.js
 * Landing Page
*/

import React from 'react';

import "../styles/LandingPage.css";
import HeroImage from "../assets/landing_laptop_clipped.jpg";

/* Landing Page component displays the landing page */
function LandingPage() {
    return (
        <section id="landing" class="page container">
            <div class="tagline">
                <div class="container">
                    <h1 class="fancy"> making and breaking.  </h1>
                    <span class="footnote">est. 2014</span>
                </div>
            </div>
            <img class="hero" src={HeroImage} alt="software development"/>
        </section>
    );
}

export default LandingPage;
