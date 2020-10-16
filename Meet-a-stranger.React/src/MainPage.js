import {Container, Row, Col, Button} from 'react-bootstrap';
import React from 'react';
import logo from './logo-main-page.svg';
import Chatroom from './Chatroom';

class MainPage extends React.Component {

    state = {
        visible: true
    };

    hidePage = () => {
        this.setState({visible : false});
      };

    render() {
        if(!this.state.visible) {
            return <Chatroom />;
        }
        else{
             return (
             <Container className="pt-5 bg-white border rounded">
                <Row className="pt-5">
                    <Col>
                    <img src={logo} style={{height: "50vh"}} ></img>
                    <p className="h1 text-muted">Meet a stranger</p>
                    <Container className="px-5 text-justify">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elit metus, eleifend sit amet purus vitae,
                    pellentesque congue neque. Proin a turpis nec massa mollis scelerisque. Praesent erat metus, fringilla quis sem nec, elementum mollis velit.
                    Quisque consequat euismod dapibus. Cras gravida magna dictum justo elementum, in consectetur ipsum elementum. Vestibulum mollis at sapien at porta. Maecenas non aliquet.                    
                    </p>
                    </Container>
                    <Row className="d-flex justify-content-center py-2">
                        <Col xs={6} sm={5} md={4}><Button onClick={this.hidePage} className="mx-2 w-100" size="lg" >Connect</Button></Col>
                        <Col xs={6} sm={5} md={4}><Button className="mx-2 w-100 text-white" variant="warning" size="lg" >Rules</Button></Col>
                    </Row>
                    </Col>
                 </Row>
          </Container>
        )
    };
}
}
export default MainPage;