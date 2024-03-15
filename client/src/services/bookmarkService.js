import api from './api';

const getBookmarks = async () => {
  const response = await api.get('/api/bookmarks');
  return response.data;
};

const bookmarkService = { getBookmarks };

export default bookmarkService;
