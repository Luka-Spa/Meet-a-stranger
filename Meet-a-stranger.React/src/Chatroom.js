import {Container, Row} from 'react-bootstrap';
import React from 'react';
import VideoChat from './VideoChat';
import TextChat from './TextChat';

class Chatroom extends React.Component {
  render() {
    return (
      <Container className="pt-5 bg-white border rounded h-100">
          <Row className="py-5 p-2 d-flex h-100">    
            <VideoChat serverIp={"http://localhost:3001"}/>
            <TextChat serverIp={"https://meet-a-stranger-websocket.herokuapp.com/sock"}/>
          </Row>
      </Container>
    )
  }
}
export default Chatroom;
