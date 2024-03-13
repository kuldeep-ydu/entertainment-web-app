import axios from './axiosInstance';

const signup = async (credentials) => {
  const response = await axios.post('/api/sign-up', credentials);
  return response.data;
};

const userService = { signup };

export default userService;
