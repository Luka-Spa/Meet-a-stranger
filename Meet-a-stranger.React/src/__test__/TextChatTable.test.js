import React from "react";
import { render } from "@testing-library/react";
import { TextChatTable } from "../components/TextChatTable";

const message1 = { content: "hello", sender: "client", type: "message" };
const message2 = { content: "How are you?", sender: "client", type: "message" };
const message3 = { content: "bye", sender: "client", type: "message" };

it("renders correctly 3 messages", () => {
  const messages = [message1, message2, message3];
  const { getByText } = render(<TextChatTable messages={messages} />);
  expect(getByText("hello")).toBeTruthy();
  expect(getByText("How are you?")).toBeTruthy();
  expect(getByText("bye")).toBeTruthy();
});

it("renders correctly 0 messages", () => {
  const messages = [];
  const { getByTestId, queryByText } = render(
    <TextChatTable messages={messages} />
  );
  expect(getByTestId("message-table")).toBeTruthy();
  expect(queryByText("hello")).not.toBeInTheDocument();
});
