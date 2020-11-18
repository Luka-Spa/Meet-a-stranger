import { Container, Row, Col, Spinner } from "react-bootstrap";
import React from "react";

export default class Loading extends React.Component {
  render() {
    return (
      <Container
        style={{ height: "100vh" }}
        className="pt-5 bg-white border rounded"
      >
        <Row className="pt-5 h-100 d-flex align-items-center justify-content-center">
          <Col>
            <h2 data-testid="loading-text" className="text-secondary">
              Loading
            </h2>
            <Spinner
              data-testid="loading-spinner"
              animation="border"
              variant="secondary"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
