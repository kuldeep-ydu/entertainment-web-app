require('dotenv').config();

const jwt = require('jsonwebtoken');
const logger = require('./logger');
const User = require('../models/User');

const requestLogger = (request, response, next) => {
  logger.info('Method', request.method);
  logger.info('Path', request.path);
  logger.info('Body', request.body);
  logger.info('---');
  next();
};

const verifyToken = async (request, response, next) => {
  const cookies = request.cookies;
  if (!cookies?.jwt) {
    next();
  }

  const token = cookies.jwt;

  if (!token) {
    next();
  } else {
    try {
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      const user = await User.findOne({ email: decodedToken.email });
      request['user'] = user;

      next();
    } catch (error) {
      return response.sendStatus(204);
    }
  }
};

module.exports = { requestLogger, verifyToken };
