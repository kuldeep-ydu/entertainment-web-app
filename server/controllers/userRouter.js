const userRouter = require('express').Router();
const Multer = require('multer');
const handleUpload = require('../utils/cloudinary');
const User = require('../models/User');
const Media = require('../models/Media');
const bcrypt = require('bcryptjs');
const middleware = require('../utils/middleware');

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
      const { url: avatar } = await handleUpload(dataURI);

      const user = new User({
        email,
        passwordHash,
        avatar,
      });

      await user.save();

      return response.status(201).json(user);
    } catch (error) {
      console.log(error.message);
      return response.status(500).json({ message: error.message });
    }
  },
);

userRouter.post(
  '/api/user/bookmark-media',
  middleware.verifyToken,
  async (request, response) => {
    const user = request.user;
    const { mediaId } = request.body;
    user.bookmarks = user.bookmarks.concat(mediaId);
    await user.save();

    const media = await Media.findById(mediaId);
    media.bookmarkedBy = media.bookmarkedBy.concat(user._id);
    await media.save();

    return response.json({ message: 'Media bookmarked successfully' });
  },
);

userRouter.post(
  '/api/user/unbookmark-media',
  middleware.verifyToken,
  async (request, response) => {
    const user = request.user;
    const { mediaId } = request.body;

    user.bookmarks = user.bookmarks.filter((id) => id.toString() !== mediaId);
    await user.save();

    const media = await Media.findById(mediaId);
    media.bookmarkedBy = media.bookmarkedBy.filter(
      (id) => id.toString() !== user._id.toString(),
    );

    await media.save();

    return response.json({
      message: 'Media unbookmarked successfully',
    });
  },
);

module.exports = userRouter;
