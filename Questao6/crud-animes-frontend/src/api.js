import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/animes',
});

export const fetchAnimes = async () => {
    const response = await api.get('/');
    return response.data;
};

export const createAnime = async (anime) => {
    const response = await api.post('/', anime);
    return response.data;
};

// Outras funções como update e delete podem ser adicionadas aqui
