import React from "react";
import { Home } from "./pages/Home";
import { Share } from "./pages/Share";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route exact path="/share" component={Share} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};
