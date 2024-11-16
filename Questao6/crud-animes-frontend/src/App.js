import React, { useEffect, useState } from 'react';
import { fetchAnimes } from './api';
import AnimeForm from './components/AnimeForm';
import AnimeList from './components/AnimeList';

const App = () => {
    const [animes, setAnimes] = useState([]);

    const loadAnimes = async () => {
        try {
            const data = await fetchAnimes();
            setAnimes(data);
        } catch (error) {
            console.error('Erro ao carregar animes:', error);
        }
    };

    useEffect(() => {
        loadAnimes();
    }, []);

    const handleAnimeCreated = (newAnime) => {
        setAnimes((prevAnimes) => [...prevAnimes, newAnime]);
    };

    return (
        <div>
            <h1>CRUD de Animes</h1>
            <AnimeForm onAnimeCreated={handleAnimeCreated} />
            <AnimeList animes={animes} />
        </div>
    );
};

export default App;

