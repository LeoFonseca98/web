// services/animeService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/animes';

export const getAnimes = async () => axios.get(API_URL);
export const getAnimeById = async (id) => axios.get(`${API_URL}/${id}`);
export const createAnime = async (anime) => axios.post(API_URL, anime);
export const updateAnime = async (id, anime) => axios.put(`${API_URL}/${id}`, anime);
export const deleteAnime = async (id) => axios.delete(`${API_URL}/${id}`);
