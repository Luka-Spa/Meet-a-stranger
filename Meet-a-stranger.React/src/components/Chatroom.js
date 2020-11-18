import { Container, Row } from "react-bootstrap";
import React from "react";
import io from "socket.io-client";
import VideoChat from "./VideoChat";
import TextChat from "./TextChat";
import Loading from "./Loading";
import Error from "./Error";
import { v4 as uuidv4 } from "uuid";

export default class Chatroom extends React.Component {
  socket = null;
  id = uuidv4();
  constructor(props) {
    super();
    this.state = { roomJoined: false, error: false };
    this.socket = io(props.serverIp);
  }

  componentDidMount() {
    this.socket.on("connect", () => this.onConnect());
    this.socket.on("connect_error", () => this.onError());
    this.socket.on("room-joined", () => this.onJoined());
  }
  onError() {
    this.setState({ error: true });
  }
  onJoined() {
    this.setState({ roomJoined: true });
    console.log("Chatroom joined");
  }
  onConnect() {
    console.log("Connected to socket");
    this.socket.emit("join-room", this.id);
  }

  render() {
    if (this.state.roomJoined) {
      return (
        <Container className="pt-5 bg-white border rounded h-100">
          <Row className="py-5 p-2 d-flex h-100">
            <VideoChat socket={this.socket} id={this.id} />
            <TextChat socket={this.socket} id={this.id} />
          </Row>
        </Container>
      );
    }
    if (!this.state.roomJoined && !this.state.error) {
      return <Loading />;
    }
    return <Error />;
  }
}
