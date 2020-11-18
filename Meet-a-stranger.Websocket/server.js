const port = 3001;
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

  io.on('connection', socket => {
        const roomId = 3;
        socket.on('join-room', (userId) => joinRoom(userId, socket, roomId))        
        })

  function joinRoom(userId, socket, roomId){
        socket.join(roomId);
        socket.emit('room-joined');
        console.log("user " + userId + " joined in room " + roomId);
        socket.on('new-peer', (peerId) => handlePeer(roomId,peerId,socket));
        socket.on('sendMessage', (message) => onMessage(message, roomId));
        socket.on('disconnect', () => onDisconnect(userId, roomId));
  }

  function handlePeer(roomId,peerId,socket) {
    console.log("peer: " + peerId + " created");
    socket.to(roomId).broadcast.emit('peer-connected', peerId);
  }

  function onMessage(message, roomId){
    console.log("message recieved " + message.content + " in room " + roomId);
    io.in(roomId).emit('chat-message', message);
  }

  function onDisconnect(userId, roomId){
    console.log("user: " + userId + " disconnected in room " + roomId);
    io.in(roomId).emit('user-disconnected', userId);
  }
  
server.listen(port)