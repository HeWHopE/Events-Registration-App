import axios from 'axios';

export const BACKEND_URL = process.env.BACKEND_URL;

export const instance = axios.create({ baseURL: BACKEND_URL, withCredentials: true });
