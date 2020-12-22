import { Container, Row } from "react-bootstrap";
import React from "react";
import VideoChat from "./VideoChat";
import TextChat from "./TextChat";
import Loading from "./Loading";
import Error from "./Error";

export default class Chatroom extends React.Component {
  constructor(props) {
    super();
    this.state = { roomJoined: false, error: false };
  }

  componentDidMount() {
    this.props.socket.emit("join-room", this.props.id);
    this.props.socket.on("connect_error", () => this.onError());
    this.props.socket.on("room-joined", () => this.onJoined());
  }

  componentWillUnmount() {
    this.props.socket.emit("leaveRoom");
    this.props.socket.off("connect_error");
    this.props.socket.off("room-joined");
  }
  onError() {
    this.setState({ error: true });
  }
  onJoined() {
    this.setState({ roomJoined: true });
    console.log("Chatroom joined");
  }

  render() {
    if (this.state.roomJoined) {
      return (
        <Container className="pt-5 bg-white border rounded h-100">
          <Row className="py-5 p-2 d-flex h-100">
            <VideoChat socket={this.props.socket} id={this.props.id} />
            <TextChat socket={this.props.socket} id={this.props.id} />
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
