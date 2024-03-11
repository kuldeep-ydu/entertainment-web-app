require('dotenv').config();

const jwt = require('jsonwebtoken');

const verifyToken = (request, response, next) => {
  const cookies = request.cookies;
  if (!cookies?.jwt) {
    next();
  }

  const token = cookies.jwt;

  jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error) response.sendStatus(403);
    request['user'] = decoded.email;
    next();
  });
};

module.exports = verifyToken;
