const port = 3001;
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const clients = [];

io.on("connection", (socket) => {
  const roomId = 3;
  clients[socket.id] = socket;
  socket.on("join-room", (userId) => joinRoom(userId, socket, roomId));
});

function joinRoom(userId, socket, roomId) {
  socket.join(roomId);
  socket.emit("room-joined");
  console.log("user " + userId + " joined in room " + roomId);
  socket.on("new-peer", (peerId) => handlePeer(roomId, peerId, socket));
  socket.on("sendMessage", (message) => onMessage(message, roomId));
  socket.on("leaveRoom", () => onLeaveRoom(socket, userId, roomId));
  socket.on("disconnect", () => onDisconnect(userId, roomId, socket));
}

function handlePeer(roomId, peerId, socket) {
  console.log("peer: " + peerId + " created");
  socket.to(roomId).broadcast.emit("peer-connected", peerId);
}

function onMessage(message, roomId) {
  console.log("message recieved " + message.content + " in room " + roomId);
  io.in(roomId).emit("chat-message", message);
}

function onLeaveRoom(socket, userId, roomId) {
  socket.leave(roomId);
  console.log("user: " + userId + " left room " + roomId);
  io.in(roomId).emit("user-disconnected", userId);
  socket.removeAllListeners();
  socket.on("join-room", (userId) => joinRoom(userId, socket, roomId));
}

function onDisconnect(userId, roomId, socket) {
  console.log("user: " + userId + " disconnected");
  io.in(roomId).emit("user-disconnected", userId);
  delete clients[socket.id];
}
server.listen(process.env.PORT || port);
