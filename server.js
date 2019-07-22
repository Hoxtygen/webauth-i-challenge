const express = require('express');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the introductory class on web authentication.',
  });
});

module.exports = server;
