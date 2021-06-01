import React from "react";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar";
import Page from "./components/pages/Page";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";
import Page5 from "./components/pages/Page5";
import Page6 from "./components/pages/Page6";
import Page7 from "./components/pages/Page7";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/pages/Page">
            <Page />
          </Route>
          <Route exact path="/pages/Page2">
            <Page2 />
          </Route>
          <Route exact path="/pages/Page3">
            <Page3 />
          </Route>
          <Route exact path="/pages/Page4">
            <Page4 />
          </Route>
          <Route exact path="/pages/Page5">
            <Page5 />
          </Route>
          <Route exact path="/pages/Page6">
            <Page6 />
          </Route>
          <Route exact path="/pages/Page7">
            <Page7 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
