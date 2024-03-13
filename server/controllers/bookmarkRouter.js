const bookmarkRouter = require('express').Router();
const middleware = require('../utils/middleware');
const Media = require('../models/Media');

bookmarkRouter.get(
  '/api/bookmarks',
  middleware.verifyToken,
  async (request, response) => {
    // const user = request.user

    const movies = await Media.find({ category: 'Movie' });
    const tvSeries = await Media.find({ category: 'TV Series' });
    response.json({ movies, tvSeries });
  },
);

module.exports = bookmarkRouter;
