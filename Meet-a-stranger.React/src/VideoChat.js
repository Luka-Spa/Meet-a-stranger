import {Container, Row, Col, Button} from 'react-bootstrap';
import React from 'react';

class VideoChat extends React.Component {
    render() {
        return(
            <Col xs={12} sm={12} md={5}>
                <Row className="h-50 p-1">
                    <Col xs={12}>
                        <video className="w-100 h-100 border" id="MyWebCam"></video>
                    </Col>
                </Row>
                <Row className="h-50 p-1">
                    <Col xs={12}>
                        <video className="w-100 h-100 border" id="StrangerWebCam"></video>    
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default VideoChat;