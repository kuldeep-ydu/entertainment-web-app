import axiosInstance from './axiosInstance';

const getBookmarks = async () => {
  const response = await axiosInstance.get('/api/bookmarks');
  return response.data;
};

const bookmarkService = { getBookmarks };

export default bookmarkService;
