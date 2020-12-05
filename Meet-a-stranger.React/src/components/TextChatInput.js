import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export const TextChatInput = ({ sendMessage }) => {
  let textInput;

  const send = () => {
    sendMessage(textInput.value);
    textInput.value = "";
  };

  return (
    <Row className="p-1">
      <Col xs={9}>
        <Form.Control
          ref={(input) => {
            textInput = input;
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") send();
          }}
          type="text"
          placeholder="Message..."
        />
      </Col>
      <Col xs={3}>
        <Button className="w-100" onClick={send}>
          Send
        </Button>
      </Col>
    </Row>
  );
};
