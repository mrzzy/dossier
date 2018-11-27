/*
 * pages/LandingPage.js
 * Landing Page
*/

import React from 'react';
import {ResponsiveSwitch, ResponsiveCase} from '../components/ResponsiveSwitch.js';

import "../styles/LandingPage.css";
import HeroImageClipped from "../assets/landing_laptop_clipped@2x.jpg";
import HeroImage from "../assets/landing_laptop.jpg";

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
            <ResponsiveSwitch>
                <ResponsiveCase minWidth={800} component={
                    <img class="hero" src={HeroImageClipped} alt="software development"/>}
                />
                <ResponsiveCase minWidth={0} component={
                    <img class="hero" src={HeroImage} alt="software development"/>}
                />
            </ResponsiveSwitch>
        </section>
    );

}

export default LandingPage;
