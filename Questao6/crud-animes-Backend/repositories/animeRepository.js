// repositories/animeRepository.js
const animes = [];

class AnimeRepository {
    findAll() {
        return animes;
    }

    findById(id) {
        return animes.find(anime => anime.id === id);
    }

    save(anime) {
        animes.push(anime);
        return anime;
    }

    update(id, updatedAnime) {
        const index = animes.findIndex(anime => anime.id === id);
        if (index === -1) return null;
        animes[index] = { ...animes[index], ...updatedAnime };
        return animes[index];
    }

    delete(id) {
        const index = animes.findIndex(anime => anime.id === id);
        if (index === -1) return null;
        return animes.splice(index, 1)[0];
    }
}

module.exports = new AnimeRepository();
