import api from './api';

const signup = async (credentials) => {
  const response = await api.post('/api/sign-up', credentials);
  return response.data;
};

const userService = { signup };

export default userService;
