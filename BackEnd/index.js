const express = require('express');
const { createServer, Server } = require('node:http');
const port = 3000;

const app = express();
const Server = createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

Server.listen(port, () => {
    console.log('server running at port:', port)
});