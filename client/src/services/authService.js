import api from './api';

const login = async (credentials) => {
  const response = await api.post('/api/auth/login', credentials);
  return response.data;
};

const checkAuthentication = async () => {
  const response = await api.post('/api/auth/is-authenticated');
  return response.data;
};

const logout = async () => {
  await api.get('/api/auth/logout');
};

const authService = { login, checkAuthentication, logout };

export default authService;
