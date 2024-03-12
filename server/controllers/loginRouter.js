const loginRouter = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer();
const middleware = require('../utils/middleware');

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
    email: existingUser.email,
    avatar: existingUser.avatar,
  });
});

loginRouter.post(
  '/api/is-authenticated',
  middleware.verifyToken,
  async (request, response) => {
    if (!request.user) {
      return response.status(204).json({ isAuthenticated: false });
    }

    const user = await User.findOne({ email: request.user.email });

    return response.json({
      email: user.email,
      avatar: user.avatar,
    });
  },
);

module.exports = loginRouter;
