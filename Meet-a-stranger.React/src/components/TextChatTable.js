import React from "react";

export const TextChatTable = ({ messages }) => {
  console.log(messages);
  return (
    <table data-testid="message-table" className="table table-striped">
      <tbody>
        {messages.map((msg, i) => {
          if (msg === null) return <tr></tr>;
          const { content, sender /* type, */ } = msg;
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
    </table>
  );
};
