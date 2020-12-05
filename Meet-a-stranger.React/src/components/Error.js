import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";
import ErrorImg from "../img/error.svg";

export default class Error extends React.Component {
  render() {
    return (
      <Container
        style={{ height: "100vh" }}
        className="pt-5 bg-white border rounded"
      >
        <Row className="pt-5 h-100 d-flex align-items-center justify-content-center">
          <Col>
            <Image
              src={ErrorImg}
              alt="error image"
              style={{ height: "30vh" }}
            />
            <h2 data-testid="error-text" className="text-secondary">
              Something went wrong...
            </h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
