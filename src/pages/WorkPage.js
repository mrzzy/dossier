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
                At Tinkertanker, I redesigned their booking
                system, TRUMP to make managing
                courses more user friendly. 
                Addtionally, I contributed to the rewrite
                of  TRUMP in Django backed by a PostgreSQL 
                DB to scale to large numbers of bookings.">
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
                As a companion app for my Fundamentals of
                Electronics project work, Cardio worked in 
                tandem with my heartbeat sensing circuit to
                provide the accurate measure of their current
                heartrate. Cardio utilised OpenCV detect 
                the position of and capture the heartrate
                information transmitted by the circuits LED.">
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
