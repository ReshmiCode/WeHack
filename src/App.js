import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import CompanyList from "./screens/CompanyList";
import CompanyDetail from "./screens/CompanyDetail";
import Advice from "./screens/Advice";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/companies" exact component={CompanyList} />
        <Route path="/company/:id" exact component={CompanyDetail} />
        <Route path="/advice" exact component={Advice} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
