const express = require('express');
const route = require('./routes/index')
const http = require('http')
const app = express()
const PORT = 3000
const io = require('socket.io')(http, {
    cors: {
      origin: "http://localhost:8080",
      methods: ["GET", "POST"],
      credentials: true
    },
    allowEIO3: true
  });
  io.on('connection', (socket) => {
    console.log('a user connected');
  });

app.use(route)

app.listen(PORT,() => console.log(`server runnning on port: ${PORT}`) )