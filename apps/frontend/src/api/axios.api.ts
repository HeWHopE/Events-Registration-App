import axios from 'axios';

export const API_URL = 'http://localhost:3005';

export const instance = axios.create({ baseURL: API_URL, withCredentials: true });
