import React from "react";
import logo from "./logo.png";
import "./App.css";
import Layout from "./common/layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Event from "./pages/Event";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout logo={logo}>
          <Switch>
            <Route path="/event">
              <Event/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
