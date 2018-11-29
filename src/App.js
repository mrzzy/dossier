import React, { Component } from 'react';
import LandingPage from "./pages/LandingPage.js";
import WorkPage from "./pages/WorkPage.js";
import BlogPage from "./pages/BlogPage.js";

import './styles/App.css';


class App extends Component {
  render() {
    return (
        <div className="App">
            <BlogPage/>
        </div>
    );
  }
}

export default App;
