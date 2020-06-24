import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import TotalPoints from "./components/TotalPoints";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Total-Points" component={TotalPoints} />
          <Route path="/Form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
