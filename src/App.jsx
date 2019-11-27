import React from "react";
import { Home } from "./components/Home";
import { Share } from "./components/Share";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/share" component={Share} />
        </Switch>
      </Router>
    </div>
  );
};
