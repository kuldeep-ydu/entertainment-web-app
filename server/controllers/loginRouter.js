const loginRouter = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer();
const verifyToken = require('../utils/middleware');

loginRouter.post('/api/login', upload.none(), async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response
      .status(400)
      .json({ message: 'Email and password are required.' });
  }

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return response.status(401).json({ message: 'User does not exist.' });
  }

  const token = jwt.sign({ email }, process.env.TOKEN_SECRET);

  response.cookie('jwt', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    maxAge: 24 * 60 * 60 * 1000,
  });

  return response.json({
    avatar: existingUser.avatar,
  });
});

loginRouter.post(
  '/api/is-authenticated',
  verifyToken,
  async (request, response) => {
    if (!request.user) {
      return response.status(204).json({ isAuthenticated: false });
    }

    const user = await User.findOne({ email: request.user });

    return response.json({ avatar: user.avatar, isAuthenticated: true });
  },
);

module.exports = loginRouter;
