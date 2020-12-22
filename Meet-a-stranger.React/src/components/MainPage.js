import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-main-page.svg";

export default class MainPage extends React.Component {
  render() {
    return (
      <Container className="pt-5 bg-white border-bottom-0 rounded h-100">
        <Row className="pt-5">
          <Col>
            <img
              src={logo}
              className="img-fluid"
              style={{ height: "400px" }}
              alt="first page"
            ></img>
            <p className="h1 text-muted">Meet a stranger</p>
            <Container className="px-5 text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                elit metus, eleifend sit amet purus vitae, pellentesque congue
                neque. Proin a turpis nec massa mollis scelerisque. Praesent
                erat metus, fringilla quis sem nec, elementum mollis velit.
                Quisque consequat euismod dapibus. Cras gravida magna dictum
                justo elementum, in consectetur ipsum elementum. Vestibulum
                mollis at sapien at porta. Maecenas non aliquet.
              </p>
            </Container>
            <Container className="fixed-bottom border-right border-left bg-white">
              <Row className="d-flex p-2 justify-content-center">
                <Col xs={6} sm={5} md={4}>
                  <Link to="/random-chat">
                    <Button onClick={this.hidePage} className="w-100" size="lg">
                      Connect
                    </Button>
                  </Link>
                </Col>
                <Col xs={6} sm={5} md={4}>
                  <Link to="/rules">
                    <Button
                      className="w-100 text-white"
                      variant="warning"
                      size="lg"
                    >
                      Rules
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
