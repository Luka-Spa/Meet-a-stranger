const port = 3001;
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  const roomId = 3;
  socket.on(
    "join-room",
    async (userId) => await joinRoom(userId, socket, roomId)
  );
});

async function joinRoom(userId, socket, roomId) {
  await socket.join(roomId);
  await socket.emit("room-joined");
  console.log("user " + userId + " joined in room " + roomId);
  await socket.on(
    "new-peer",
    async (peerId) => await handlePeer(roomId, peerId, socket)
  );
  await socket.on(
    "sendMessage",
    async (message) => await onMessage(message, roomId)
  );
  await socket.on("disconnect", async () => await onDisconnect(userId, roomId));
}

async function handlePeer(roomId, peerId, socket) {
  console.log("peer: " + peerId + " created");
  socket.to(roomId).broadcast.emit("peer-connected", peerId);
}

async function onMessage(message, roomId) {
  console.log("message recieved " + message.content + " in room " + roomId);
  io.in(roomId).emit("chat-message", message);
}

async function onDisconnect(userId, roomId) {
  console.log("user: " + userId + " disconnected in room " + roomId);
  io.in(roomId).emit("user-disconnected", userId);
}
server.listen(process.env.PORT || port);
