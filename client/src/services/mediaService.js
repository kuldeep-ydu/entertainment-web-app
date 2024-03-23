import api from './api';

const baseURL = '/api/media';

const getOne = async (id) => {
  const response = await api.get(`${baseURL}/play/${id}`);
  return response.data;
};

const getTrending = async () => {
  const response = await api.get(`${baseURL}/trending`);
  return response.data;
};

const getRecommended = async () => {
  const response = await api.get(`${baseURL}/recommended`);
  return response.data;
};

const getMovies = async () => {
  const response = await api.get(`${baseURL}/movies`);
  return response.data;
};

const getTvSeries = async () => {
  const response = await api.get(`${baseURL}/tv-series`);
  return response.data;
};

const searchMedia = async (searchValue) => {
  const response = await api.get(`${baseURL}/search?title=${searchValue}`);
  return response.data;
};

const bookmarkedMedia = async () => {
  const response = await api.get(`${baseURL}/bookmarked`);
  return response.data;
};

const mediaService = {
  getOne,
  getTrending,
  getRecommended,
  getMovies,
  getTvSeries,
  searchMedia,
  bookmarkedMedia,
};

export default mediaService;
