import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Layout from "./views/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <h1>We ready to roll</h1>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;