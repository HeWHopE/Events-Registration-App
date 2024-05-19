import axios from 'axios';

export const API_URL = process.env.BACKEND_URL;

export const instance = axios.create({ baseURL: API_URL, withCredentials: true });
