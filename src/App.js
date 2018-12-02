import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import LandingPage from "./pages/LandingPage.js";
import WorkPage from "./pages/WorkPage.js";
import BlogPage from "./pages/BlogPage.js";
import ArticlePage from "./pages/ArticlePage.js";

import './styles/App.css';

function HomePage(props) {
    return (
        <div className="page" id="home">
            <LandingPage/>
            <WorkPage/>
        </div>
    );
}   

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path='/' component={HomePage} />
            </div>
        );
    }
}

export default App;
