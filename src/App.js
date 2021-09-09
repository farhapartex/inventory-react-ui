import './App.css';
import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import RootPage from "./pages/admin/RootPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/login" component={AuthPage}></Route>
          <Route exact path="/registration" component={AuthPage}></Route>
          <Route exact path="/password-reset-account-verify" component={AuthPage}></Route>
          <Route exact path="/password-reset" component={AuthPage}></Route>
          {/* Admin Routers */}
          <Route path="/admin" component={RootPage}></Route>
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
