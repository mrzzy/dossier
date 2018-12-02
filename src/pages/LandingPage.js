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
        <section id="landing" className="page container">
            <div className="tagline">
                <div className="container">
                    <h1 className="fancy"> Zhan yan</h1>
                    <span className="footnote">
                        software developer 
                        and ai enthusiast
                        based in 
                        singapore.
                    </span>
                </div>
            </div>
            <ResponsiveSwitch>
                <ResponsiveCase minWidth={800} component={
                    <img className="hero" src={HeroImageClipped} alt="software development"/>}
                />
                <ResponsiveCase minWidth={0} component={
                    <img className="hero" src={HeroImage} alt="software development"/>}
                />
            </ResponsiveSwitch>
        </section>
    );

}

export default LandingPage;
