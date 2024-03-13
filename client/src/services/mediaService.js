import axios from './axiosInstance';

const getTrending = async () => {
  const response = await axios.get('/api/media/trending');
  return response.data;
};

const getRecommended = async () => {
  const response = await axios.get('/api/media/recommended');
  return response.data;
};

const getMovies = async () => {
  const response = await axios.get('/api/media/movies');
  return response.data;
};

const getTvSeries = async () => {
  const response = await axios.get('/api/media/tv-series');
  return response.data;
};

const mediaService = { getTrending, getRecommended, getMovies, getTvSeries };

export default mediaService;
