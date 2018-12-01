import React, { Component } from 'react';
import LandingPage from "./pages/LandingPage.js";
import WorkPage from "./pages/WorkPage.js";
import BlogPage from "./pages/BlogPage.js";
import ArticlePage from "./pages/ArticlePage.js";

import './styles/App.css';


class App extends Component {
    render() {
        const entry = JSON.parse('{"timestamp":"2018-11-30T12:15:47+08:00","id":"ml_course_session_1","title":"Session I - Fundermentals of Machine Learning","contents_table":["Session I - Fundermentals of Machine Learning","What is Machine Learning? ","Case Study 1 - Boston Housing Prediction Problem","reorder is required because we shuffled the data","Case Study 2 - Chatbot"],"subtitle":"Lecture notes for Machine Learning Course","href":"/content/blog/entry/ml_course_session_1.md"}');

        return (
            <div className="App">
                <ArticlePage entry={entry}/>
            </div>
        );
    }
}

export default App;
