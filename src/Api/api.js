import axios from 'axios';
import server from '../config';

export const api = axios.create({
  baseURL: server.BACKEND_DOMAIN,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const API_URL = {
    login: 'auth/login',
    logout: 'auth/logout',
    signup: 'auth/register',
    loginByToken:"auth/token",
    changePassowrd: "auth/forget"
  };

// api.defaults.withCredentials = true; 