const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('<h2>Server is up and running</h2>');
});

module.exports = server;