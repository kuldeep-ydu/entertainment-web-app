const logoutRouter = require('express').Router();
const User = require('../models/User');

logoutRouter.get('/logout', async (request, response) => {
  const cookies = request.cookies;

  if (!cookies?.jwt) {
    return response.status(204);
  }

  const refreshToken = cookies.jwt;

  const existingUser = await User.findOne(
    (user) => user.refreshToken === refreshToken,
  );

  if (!existingUser) {
    response.clearCookie('jwt', { httpOnly: true });
    return response.status(204);
  }

  response.clearCookie('jwt', { httpOnly: true, secure: true });
  return response.status(204);
});

module.exports = logoutRouter;
