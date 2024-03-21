import api from './api';

const getTrending = async () => {
  const response = await api.get('/api/media/trending');
  return response.data;
};

const getRecommended = async () => {
  const response = await api.get('/api/media/recommended');
  return response.data;
};

const getMovies = async () => {
  const response = await api.get('/api/media/movies');
  return response.data;
};

const getTvSeries = async () => {
  const response = await api.get('/api/media/tv-series');
  return response.data;
};

const searchMedia = async (searchValue) => {
  const response = await api.get(`/api/media?title=${searchValue}`);
  return response.data;
};

const mediaService = {
  getTrending,
  getRecommended,
  getMovies,
  getTvSeries,
  searchMedia,
};

export default mediaService;
