import { Col } from "react-bootstrap";
import React from "react";
import { TextChatTable } from "./TextChatTable";
import { TextChatInput } from "./TextChatInput";

export default class TextChat extends React.Component {
  constructor() {
    super();
    this.state = { messages: [] };
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.props.socket.on("chat-message", (msg) => this.onMessage(msg));
    this.props.socket.on("user-disconnected", (userId) =>
      this.userDisconnected(userId)
    );
  }

  componentDidUpdate() {
    document.getElementById("data").scrollTop = document.getElementById(
      "data"
    ).scrollHeight;
  }
  userDisconnected(userId) {
    const msg = {
      sender: "System",
      content: userId + " disconnected",
      type: "Disconnect",
    };
    this.onMessage(msg);
  }

  onMessage(msg) {
    this.setState({
      messages: [...this.state.messages, msg],
    });
  }

  sendMessage = (message) => {
    if (message !== "") {
      var msg = {
        sender: "client",
        content: message,
        type: "CHAT",
      };
      this.props.socket.emit("sendMessage", msg);
    }
  };

  render() {
    return (
      <Col xs={12} sm={12} md={7}>
        <TextChatTable messages={this.state.messages} />
        <TextChatInput sendMessage={this.sendMessage} />
      </Col>
    );
  }
}
