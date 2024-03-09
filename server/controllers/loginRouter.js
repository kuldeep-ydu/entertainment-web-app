const loginRouter = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

loginRouter.post('', async (request, response) => {
  const { email, password, avatar } = request.body;

  if (!email || !password || !avatar) {
    return response
      .status(400)
      .json({ message: 'Email and password are required.' });
  }

  const existingUser = await User.find((user) => user.email === email);

  if (!existingUser) {
    return response.status(401).json({ message: 'User does not exist.' });
  }

  const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30s',
  });

  const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '1d',
  });

  existingUser.refreshToken = refreshToken;

  await existingUser.save();

  response.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 24 * 60 * 60 * 1000,
  });

  return response.json({
    email,
    password,
    avatar,
    accessToken,
  });
});

module.exports = loginRouter;
