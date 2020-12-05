import React from "react";
import { Table, Row, Col } from "react-bootstrap";

export const TextChatTable = ({ messages }) => {
  console.log(messages);
  return (
    <Row className="p-1">
      <Col xs={12}>
        <div
          id="data"
          style={{ height: "40vh" }}
          className="border overflow-auto"
        >
          <Table data-testid="message-table" borderless striped>
            <tbody>
              {messages.map((msg, i) => {
                if (msg === null) return <tr></tr>;
                const { content, sender } = msg;
                return (
                  <tr key={i}>
                    <td>
                      <b>{sender}: </b>
                      {content}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Col>
    </Row>
  );
};
