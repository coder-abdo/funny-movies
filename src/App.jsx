import React, { useEffect, useContext } from "react";
import { Home } from "./pages/Home";
import { Share } from "./pages/Share";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import fire from "./config/firebase";
import { Data, SET_USER, CLEAR_USER } from "./components/Store";
import { Switch, Route, useHistory } from "react-router-dom";
import "./styles/app.css";
export const App = props => {
  const { state, dispatch } = useContext(Data);
  const history = useHistory();

  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: SET_USER, payload: user });
        history.push("/");
      } else {
        history.push("/login");
        dispatch({ type: CLEAR_USER });
      }
    });
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};
