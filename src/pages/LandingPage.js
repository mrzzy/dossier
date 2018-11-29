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
        <section id="landing" Class="page container">
            <div Class="tagline">
                <div Class="container">
                    <h2 Class="fancy"> making and breaking.  </h2>
                    <span Class="footnote">est. 2014</span>
                </div>
            </div>
            <ResponsiveSwitch>
                <ResponsiveCase minWidth={800} component={
                    <img Class="hero" src={HeroImageClipped} alt="software development"/>}
                />
                <ResponsiveCase minWidth={0} component={
                    <img Class="hero" src={HeroImage} alt="software development"/>}
                />
            </ResponsiveSwitch>
        </section>
    );

}

export default LandingPage;
