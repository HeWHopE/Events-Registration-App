import axios from 'axios';

export const BACKEND_URL = 'https://events-registration-app-po2b.onrender.com/';

export const instance = axios.create({ baseURL: BACKEND_URL, withCredentials: true });
