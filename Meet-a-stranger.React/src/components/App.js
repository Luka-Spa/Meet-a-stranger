import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import MainPage from "./MainPage";
import Rules from "./Rules";
import Chatroom from "./Chatroom";

export default function App() {
  return (
    <Router forceRefresh>
      <div data-testid="main-app-div" className="App bg-light">
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route
            path="/random-chat"
            exact
            component={() => <Chatroom serverIp={"http://localhost:3001"} />}
            forceRefresh={true}
          />
          <Route path="/rules" exact component={Rules} />
        </Switch>
      </div>
    </Router>
  );
}
