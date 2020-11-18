import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";

export default class Rules extends React.Component {
  render() {
    return (
      <Container className="pt-5 bg-white border rounded h-100">
        <Row className="pt-5 d-flex justify-content-center">
          <Col xs={12}>
            <h1>Rules</h1>
          </Col>
          <Col lg={2} sm={4}>
            <ul>
              <li>No swearing</li>
              <li>No 18+ stuff</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}
