const express = require('express');
const route = require('./routes/index')
const app = express()
const http = require('http').Server(app)
const PORT = 3000
const cors = require('cors')

app.use(cors())

const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:8080", 
    methods: ["GET", "POST"], 
    credentials: true
  },
  allowEIO3: true
});

let players = []

io.on('connection', (socket) => {
  
  console.log('a user connected');
  socket.on('hai', (data) => {
    players.push(data)
    console.log(players)
    socket.broadcast.emit('hai', players)
  })

  socket.on('sendAnswer', (data) => {
    socket.broadcast.emit('sendAnswer', data)
  })

  socket.on('disconnect', () => {
    players.shift()
  })
});

app.use(route)
http.listen(PORT,() => console.log(`server runnning on port: ${PORT}`) )