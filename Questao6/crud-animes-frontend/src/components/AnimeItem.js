// components/AnimeItem.js
import React from 'react';

const AnimeItem = ({ anime, onDelete, onEdit }) => {
    return (
        <div>
            <h3>{anime.name}</h3>
            <p>Gênero: {anime.genre}</p>
            <p>Estúdio: {anime.studio}</p>
            <button onClick={() => onEdit(anime)}>Editar</button>
            <button onClick={() => onDelete(anime.id)}>Deletar</button>
        </div>
    );
};

export default AnimeItem;
