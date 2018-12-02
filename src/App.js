import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import LandingPage from "./pages/LandingPage.js";
import WorkPage from "./pages/WorkPage.js";
import ArticlesPage from "./pages/ArticlesPage.js";
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
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/article' component={ArticlesPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
