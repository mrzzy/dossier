import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import LandingPage from "./pages/LandingPage.js";
import WorkPage from "./pages/WorkPage.js";
import ArticlesPage from "./pages/ArticlesPage.js";
import ArticlePage from "./pages/ArticlePage.js";
import Navbar from "./components/Navbar.js";

import './styles/App.css';

function HomePage(props) {
    return (
        <div className="page" id="home">
            <Navbar selected="work" />
            <LandingPage/>
            <WorkPage/>
        </div>
    );
}   
class App extends Component {
    render() {
        // TODO: add actual about homepage component
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/articles" component={ArticlesPage} />
                    <Route exact path="/article/:entryID" component={ArticlePage} />
                    <Route component={HomePage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
