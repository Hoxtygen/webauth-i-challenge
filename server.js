const express = require('express');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const userRouter = require('./router/userRoutes.js');

dotenv.config();

const server = express();
const sessionConfig = {
  name: 'montypython',
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(session(sessionConfig));
server.use('/api', userRouter);
server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the introductory class on web authentication.',
  });
});

module.exports = server;
