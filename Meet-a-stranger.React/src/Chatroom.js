import {Container, Row} from 'react-bootstrap';
import React from 'react';
import io from 'socket.io-client';
import VideoChat from './VideoChat';
import TextChat from './TextChat';
import { v4 as uuidv4 } from 'uuid';

class Chatroom extends React.Component {

  socket = null;
  id = uuidv4();
  constructor(props){
    super();
    this.state = {roomJoined: false};
    this.socket = io(props.serverIp);
  }

  componentDidMount(){
    this.socket.on('connect', () => { 
       console.log("Connected to socket")
       this.socket.emit('join-room', this.id);
    });
    this.socket.on('room-joined',() => this.onJoined());
  }

  onJoined(){
    this.setState({roomJoined: true}); 
    console.log("Chatroom joined");
  }

  render() {
    if(this.state.roomJoined) {
    return (
      <Container className="pt-5 bg-white border rounded h-100">
          <Row className="py-5 p-2 d-flex h-100">    
            <VideoChat socket={this.socket} id={this.id}/>
            <TextChat socket={this.socket} id={this.id}/>
          </Row>
      </Container>
          )
    }
    return (<p className="pt-5">Loading</p>)
  }
}
export default Chatroom;
