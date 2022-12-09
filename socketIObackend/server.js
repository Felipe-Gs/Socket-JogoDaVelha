const express = require('express');
const http = require('http');
const socket= require('socket.io');

// const  PORT = 3000

const app =  express();
const {Server} = require("socket.io")

const cors = require('cors')
app.use(cors());
const server = http.createServer(app);

//criar os sockets que vai criar os eventos

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on("connection", (socket) => {
    console.log("teste");
    console.log(`user is conected: ${socket.id}`);

    socket.on("send_message", (data)=>{
        socket.broadcast.emit("receive_message", data);
    }) 
});

server.listen(3001, ()=>{
    console.log('server is running.');
});

//felipe gomes