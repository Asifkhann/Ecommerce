import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./layout/Layout";
import HomePage from "./homePage/HomePage";
import "../App.css";
import "../Vendor.js";
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Layout history={history}>
          <Route exact path="/" component={HomePage} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
