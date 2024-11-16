import React, { useState } from 'react';
import { createAnime } from '../api';

const AnimeForm = ({ onAnimeCreated }) => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [studio, setStudio] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newAnime = await createAnime({ name, genre, studio });
            onAnimeCreated(newAnime);
            setName('');
            setGenre('');
            setStudio('');
        } catch (error) {
            console.error('Erro ao criar anime:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Gênero"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Estúdio"
                value={studio}
                onChange={(e) => setStudio(e.target.value)}
                required
            />
            <button type="submit">Adicionar Anime</button>
        </form>
    );
};

export default AnimeForm;
