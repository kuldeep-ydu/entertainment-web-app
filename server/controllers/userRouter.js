const userRouter = require('express').Router();
const Multer = require('multer');
const handleUpload = require('../utils/cloudinary');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

const getURI = (file) => {
  const b64 = Buffer.from(file.buffer).toString('base64');
  const dataURI = 'data:' + file.mimetype + ';base64,' + b64;

  return dataURI;
};

userRouter.post(
  '/api/sign-up',
  upload.single('avatar'),
  async (request, response) => {
    const {
      body: { email, password },
      file,
    } = request;

    if (!email || !password || !file) {
      return response.status(400).json({
        message: 'Email, password and avatar are required!',
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return response.status(409).json({
        message: 'User already exists',
      });
    }

    try {
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);

      const dataURI = getURI(file);
      const avatar = await handleUpload(dataURI);

      const user = {
        email,
        passwordHash,
        avatar,
      };

      return response.status(201).json(user);
    } catch (error) {
      return response.status(500).json({ message: error.message });
    }
  },
);

module.exports = userRouter;
