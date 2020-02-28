import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Topics from "./components/topics";
import Debate from "./components/debate";
import Candidates from "./components/candidates";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="https://www.eastfieldcollege.edu/au/govaffairs/votes/publishingimages/vote-464x464.png" className="App-logo" alt="logo" />
        </header>

        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/candidates" component={Candidates} />
          <Route exact path="/debate" component={Debate} />
          <Route exact path="/topics" component={Topics} />
        </div>
      </div>
    </Router>
  );
}

export default App;
