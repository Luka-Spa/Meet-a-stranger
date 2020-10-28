import {Container, Row} from 'react-bootstrap';
import React from 'react';
import VideoChat from './VideoChat';
import TextChat from './TextChat';

class Chatroom extends React.Component {
  render() {
    return (
      <Container className="pt-5 bg-white border rounded h-100">
          <Row className="pt-5 p-2 d-flex h-100">    
            <VideoChat/>
            <TextChat ip={"https://meet-a-stranger-websocket.herokuapp.com/sock"}/>
          </Row>
      </Container>
    )
  }
}
export default Chatroom;
