import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import MainPage from "./MainPage";
import Rules from "./Rules";
import Chatroom from "./Chatroom";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const id = uuidv4();
  const socket = io("https://meet-a-stranger-websocket.herokuapp.com/");
  socket.on("connect", () => onConnect());

  const onConnect = () => {
    console.log("Connected to socket");
  };

  return (
    <Router>
      <div data-testid="main-app-div" className="App bg-light">
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route
            path="/random-chat"
            exact
            render={() => <Chatroom socket={socket} id={id} />}
          />
          <Route path="/rules" exact component={Rules} />
        </Switch>
      </div>
    </Router>
  );
}
