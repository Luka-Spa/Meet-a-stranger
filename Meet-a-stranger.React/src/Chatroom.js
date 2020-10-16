import {Container, Row, Col, Button} from 'react-bootstrap';
import React from 'react';
import VideoChat from './VideoChat';
import TextChat from './TextChat';

class Chatroom extends React.Component {
  render() {
    return (
      <Container className="pt-5 bg-white border rounded">
          <Row className="pt-5 p-2 d-flex">    
            <VideoChat/>
            <TextChat ip={"http://localhost:8080/sock"}/>
          </Row>
      </Container>
    )
  }
}
export default Chatroom;
