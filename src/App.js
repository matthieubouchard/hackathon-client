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
      <link href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap" rel="stylesheet"></link>
      <div className="App">
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
