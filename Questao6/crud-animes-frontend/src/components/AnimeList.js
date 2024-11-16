import React from 'react';

const AnimeList = ({ animes }) => {
    return (
        <ul>
            {animes.map((anime) => (
                <li key={anime.id}>
                    {anime.name} - {anime.genre} - {anime.studio}
                </li>
            ))}
        </ul>
    );
};

export default AnimeList;
