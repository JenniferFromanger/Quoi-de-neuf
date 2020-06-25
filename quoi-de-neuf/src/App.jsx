import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import TotalPoints from "./components/TotalPoints";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Form4 from "./components/Form4";
import Form5 from "./components/Form5";
import Form6 from "./components/Form6";
import Form7 from "./components/Form7";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Total-Points" component={TotalPoints} />
          <Route path={`/Form/1`} component={Form1} />
          <Route path={`/Form/2`} component={Form2} />
          <Route path={`/Form/3`} component={Form3} />
          <Route path={`/Form/4`} component={Form4} />
          <Route path={`/Form/5`} component={Form5} />
          <Route path={`/Form/6`} component={Form6} />
          <Route path={`/Form/7`} component={Form7} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
