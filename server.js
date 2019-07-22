const express = require('express');
const userRouter = require('./router/userRoutes.js');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use('/api', userRouter);
server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the introductory class on web authentication.',
  });
});

module.exports = server;
