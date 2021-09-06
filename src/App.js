import './App.css';
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BasicPage from "./pages/BasicPage";
import NotFoundPage from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={BasicPage}></Route>
          <Route exact path="/login" component={AuthPage}></Route>
          <Route exact path="/registration" component={AuthPage}></Route>
          <Route exact path="/password-reset-account-verify" component={AuthPage}></Route>
          <Route exact path="/password-reset" component={AuthPage}></Route>
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
