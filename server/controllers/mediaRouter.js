const mediaRouter = require('express').Router();
const Media = require('../models/Media');

mediaRouter.get('/api/media', async (_, response) => {
  const result = await Media.find({});
  return response.status(200).json(result);
});

mediaRouter.get('/api/media/recommended', async (_, response) => {
  const mediaData = await Media.find({});
  const recommended = mediaData.slice(mediaData.length - 8, mediaData.length);
  return response.json(recommended);
});

mediaRouter.get('/api/media/trending', async (_, response) => {
  const media = await Media.find({
    isTrending: true,
  });
  return response.json(media);
});

mediaRouter.get('/api/media/movies', async (_, response) => {
  const movies = await Media.find({ category: 'Movie' });
  return response.json(movies);
});

mediaRouter.get('/api/media/tv-series', async (_, response) => {
  const tvSeries = await Media.find({ category: 'TV Series' });
  return response.json(tvSeries);
});

module.exports = mediaRouter;
