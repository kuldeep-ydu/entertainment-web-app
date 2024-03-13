import axios from './axiosInstance';

const login = async (credentials) => {
  const response = await axios.post('/api/auth/login', credentials);
  return response.data;
};

const checkAuthentication = async () => {
  console.log('wow');
  const response = await axios.post('/api/auth/is-authenticated');
  return response.data;
};

const logout = async () => {
  await axios.get('/api/auth/logout');
};

const authService = { login, checkAuthentication, logout };

export default authService;
