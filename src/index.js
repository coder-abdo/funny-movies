import React, { useEffect } from "react";
import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Store } from "./components/Store";
const RootWithAuth = () => (
  <Store>
    <Router>
      <App />
    </Router>
  </Store>
);
render(<RootWithAuth />, document.querySelector("#root"));
