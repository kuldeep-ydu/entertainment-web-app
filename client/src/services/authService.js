import api from './api';

const baseURL = '/api/auth';

const login = async (credentials) => {
  const response = await api.post(`${baseURL}/login`, credentials);
  return response.data;
};

const checkAuthentication = async () => {
  const response = await api.post(`${baseURL}/is-authenticated`);
  return response.data;
};

const logout = async () => {
  await api.get(`${baseURL}/logout`);
};

const authService = { login, checkAuthentication, logout };

export default authService;
