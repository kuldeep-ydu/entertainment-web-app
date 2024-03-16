import api from './api';

const signup = async (credentials) => {
  const response = await api.post('/api/sign-up', credentials);
  return response.data;
};

const bookmarkMedia = async (media) => {
  const response = await api.post('/api/user/bookmark-media', media);
  return response.data;
};

const unBookmarkMedia = async (media) => {
  const response = await api.post('/api/user/unbookmark-media', media);
  return response.data;
};

const userService = { signup, bookmarkMedia, unBookmarkMedia };

export default userService;
