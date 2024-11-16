let animes = [
    { id: 1, name: "Anime 1", genre: "Ação", studio: "Studio A" },
    // Outros animes...
];

exports.getAllAnimes = (req, res) => {
    res.json(animes);
};

exports.createAnime = (req, res) => {
    const { name, genre, studio } = req.body;
    if (!name || !genre || !studio) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const newAnime = {
        id: animes.length + 1,
        name,
        genre,
        studio,
    };

    animes.push(newAnime);
    res.status(201).json(newAnime);
};
