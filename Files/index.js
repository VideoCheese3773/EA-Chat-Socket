const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const port = 3000;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
});

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

io.on('disconnect', () => {
    console.log('user disconnected');
});

io.emit('some event', {
    someProperty: 'some value',
    otherProperty: 'other value'
});

server.listen(port, () => {
    console.log('server running at port:', port)
});