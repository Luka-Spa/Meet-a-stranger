const port = 3001;
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    console.log(userId + " joined")
    socket.join(roomId)
    socket.to(roomId).broadcast.emit('user-connected', userId)

    socket.on('disconnect', () => {
      console.log(userId + " disconnected")
      socket.to(roomId).broadcast.emit('user-disconnected', userId)
    })
  })
})
server.listen(port)