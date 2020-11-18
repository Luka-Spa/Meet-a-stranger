import { Form, Row, Col, Button } from "react-bootstrap";
import React from "react";
import { TextChatTable } from "./TextChatTable";

export default class TextChat extends React.Component {
  constructor() {
    super();
    this.state = { messages: [], myMessage: null };
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
    console.log(msg);
    this.setState({
      messages: [...this.state.messages, msg],
    });
  }

  sendMessage = () => {
    if (this.myMessage.value !== "") {
      var msg = {
        sender: "client",
        content: this.myMessage.value,
        type: "CHAT",
      };
      this.myMessage.value = "";
      this.props.socket.emit("sendMessage", msg);
    }
  };

  renderChatData() {
    return this.state.messages.map((msg, i) => {
      if (msg === null) return <tr></tr>;
      const { content, sender /*client, type, */ } = msg;
      return (
        <tr key={i}>
          <td>
            <b>{sender}: </b>
            {content}
          </td>
        </tr>
      );
    });
  }

  onInputEnter = (event) => {
    if (event.key === "Enter") {
      this.sendMessage();
    }
  };

  render() {
    return (
      <Col xs={12} sm={12} md={7}>
        <Row className="p-1">
          <Col xs={12}>
            <div className="w-100 h-100">
              <div
                id="data"
                style={{ height: "40vh" }}
                className="border overflow-auto"
              >
                <TextChatTable messages={this.state.messages} />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="p-1">
          <Col xs={9}>
            <Form.Control
              ref={(myMessage) => {
                this.myMessage = myMessage;
              }}
              onKeyPress={this.onInputEnter}
              type="text"
              placeholder="Message..."
            />
          </Col>
          <Col xs={3}>
            <Button className="w-100" onClick={this.sendMessage}>
              Send
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}
