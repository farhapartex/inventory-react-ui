import './App.css';
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BasicPage from "./pages/BasicPage";
import NotFoundPage from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={BasicPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/registration" component={RegistrationPage}></Route>
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
