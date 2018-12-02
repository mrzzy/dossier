/*
 * pages/WorkPage.js
 * Work Page
*/

import React from 'react';
import Showcase from "../components/Showcase";
import {ResponsiveSwitch, ResponsiveCase} from '../components/ResponsiveSwitch.js';

import "../styles/WorkPage.css";
import CardioImage from "../assets/work_cardio@2x.jpg";
import TrumpImage from "../assets/work_trump@2x.jpg";
import MobileCardioImage from "../assets/mobile_work_cardio@2x.jpg";
import MobileTrumpImage from "../assets/mobile_work_trump@2x.jpg";


/* WorkPage renders the works page */
function WorkPage(props) {
    return (
        <section Class="page" id="work">
            <Showcase orientation="right" title="trump" description="
                I designed and developed  Tinkertanker’s booking system,
                TRUMP to make managing bookings a piece of cake ">
                <ResponsiveSwitch>
                    <ResponsiveCase minWidth={800} component={ 
                        <img src={TrumpImage} alt="TRUMP" />}
                    />
                    <ResponsiveCase minWidth={0} alt="TRUMP" component={ 
                        <img src={MobileTrumpImage} alt="TRUMP" />}
                    />
                </ResponsiveSwitch>
            </Showcase>

            <Showcase orientation="left" title="cardio" description="
                In tandem with a custom
                designed circuit, Cardio uses
                object detection to accurately
                measure and display the users 
                heartrate.">
                <ResponsiveSwitch>
                    <ResponsiveCase minWidth={800} component={ 
                        <img src={CardioImage} alt="Cardio"  />}
                    />
                    <ResponsiveCase minWidth={0} component={ 
                        <img src={MobileCardioImage} alt="Cardio" />}
                    />
                </ResponsiveSwitch>
            </Showcase>
        
        </section>
    );
}

export default WorkPage;
