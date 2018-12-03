/*
 * components/Navbar.js
 * Navbar Component
 * TODO: refactor and rewrite
*/

import React from "react";
import {Link} from "react-router-dom";
import {ResponsiveSwitch, ResponsiveCase} from "../components/ResponsiveSwitch.js"

import "../styles/Navbar.css";
import hamburgerArticleSrc from "../assets/hamburger_article.png";

/* Navigation item displays a navigation item in a navbarf
 * given the target, title props and selected prop, which the latter
 * defines whether the item is selected or not
*/
function Navitem(props) {
    const selectClass = (props.selected === true) ? "selected" : "";
    return (
        <li className={"nav-item " + selectClass}>
            <Link to={props.target}> {props.title} </Link>
        </li>
    );
}

/* Navigation bar displays a navigation bar for the user to use to
 * navigate the site given the select prop which defines 
 * which part of the navigation bar is selected
*/
function Navbar(props) {
    /* HACKY CODE TODO: REFACTOR */
    const clickHandler = () => {
        const elements = document.querySelectorAll(".nav-item");
        console.log(elements);
        elements.forEach((element) => element.classList.toggle("show"));
    }
        
    const titles = ["work", "articles", "about"];
    const selectedMap = titles.map((title) => title === props.selected);

    const themeClass = "theme-" + props.selected.toLowerCase();
    const navItems = [
        <Navitem target="/" title={titles[0]} selected={selectedMap[0]} />,
        <Navitem target="/articles" title={titles[1]} selected={selectedMap[1]} />,
        <Navitem target="/about" title={titles[2]} selected={selectedMap[2]} />,
    ];
    return (
        <ResponsiveSwitch>
            <ResponsiveCase minWidth={800} component={
                <ul className={"nav-bar " + themeClass}>
                    {navItems}
                </ul>
            }/>
            <ResponsiveCase minWidth={0} component={
                <ul className={"nav-bar " + themeClass}>
                    <img src={hamburgerArticleSrc} onClick={clickHandler} alt="navigate"/>
                    {navItems}
                </ul>
            }/>
        </ResponsiveSwitch>
    );
}

export default Navbar;
