import { Col } from "react-bootstrap";
import React from "react";
import Peer from "peerjs";

export default class VideoChat extends React.Component {
  state = {
    myPeer: new Peer({
      secure: true,
      host: "peerjs-luka.herokuapp.com",
      path: "/peerjs/myapp",
      port: "443",
    }),
  };
  peers = [];
  constructor() {
    super();
    this.MyWebCam = React.createRef();
    this.StrangerWebCam = React.createRef();
  }
  componentDidMount() {
    this.state.myPeer.on("open", () => this.peerOnOpen());
    this.state.myPeer.on("error", (error) => console.log(error));
    this.loadStream();
  }
  componentWillUnmount() {
    const stream = this.MyWebCam.current.srcObject;
    if (stream) stream.getTracks().forEach((track) => track.stop());
    this.MyWebCam.current.srcObject = null;
    this.StrangerWebCam.current.srcObject = null;
    this.peers = [];
  }
  peerOnOpen() {
    console.log("peer opened");
    this.props.socket.emit("new-peer", this.state.myPeer.id);
    this.setState({ peerLoaded: true });
  }
  async loadStream() {
    await navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        this.onStreamLoaded(stream);
      });
  }

  onStreamLoaded(stream) {
    this.addVideoStream(this.MyWebCam.current, stream);
    this.state.myPeer.on("call", (call) => this.onCall(stream, call));
    this.props.socket.on("peer-connected", (userId) =>
      this.connectToNewUser(userId, stream)
    );
  }
  addVideoStream(video, stream) {
    if (video !== null && stream !== null) {
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    } else console.warn("Stream could not be added to video element");
  }
  onCall(stream, call) {
    console.log("being called");
    call.answer(stream);
    call.on("stream", (userVideoStream) => {
      this.addVideoStream(this.StrangerWebCam.current, userVideoStream);
    });
  }
  connectToNewUser(userId, stream) {
    console.log("new peer connected", userId);
    const call = this.state.myPeer.call(userId, stream);
    call.on("stream", (userVideoStream) => {
      this.addVideoStream(this.StrangerWebCam.current, userVideoStream);
    });
    call.on("close", () => {
      console.log("call closed");
    });
    this.peers[userId] = call;
  }
  userDisconnected(userId) {
    if (this.peers[userId]) {
      console.log(userId + " disconnected");
      this.peers[userId].close();
    }
  }
  render() {
    return (
      <Col xs={12} sm={12} md={5} className="h-100">
        <video
          muted
          className="w-100 h-50 rounded bg-light"
          ref={this.MyWebCam}
        ></video>
        <video
          className="w-100 h-50 rounded bg-light"
          ref={this.StrangerWebCam}
        ></video>
      </Col>
    );
  }
}
