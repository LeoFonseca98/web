const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const animes = [
  {
    id: uuidv4(),
    name: "Naruto",
    genre: "Ação",
    studio: "Pierrot"
  }
];

app.get('/animes', (req, res) => {
  res.json(animes);
});

app.get('/animes/:id', (req, res) => {
  const anime = animes.find(a => a.id === req.params.id);
  if (!anime) return res.status(404).json({ error: 'Anime não encontrado' });
  res.json(anime);
});

app.post('/animes', (req, res) => {
  const { name, genre, studio } = req.body;
  if (!name || !genre || !studio) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  const newAnime = { id: uuidv4(), name, genre, studio };
  animes.push(newAnime);
  res.status(201).json(newAnime);
});

app.put('/animes/:id', (req, res) => {
  const { name, genre, studio } = req.body;
  const anime = animes.find(a => a.id === req.params.id);

  if (!anime) return res.status(404).json({ error: 'Anime não encontrado' });
  if (!name || !genre || !studio) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  anime.name = name;
  anime.genre = genre;
  anime.studio = studio;
  res.json(anime);
});

app.delete('/animes/:id', (req, res) => {
  const index = animes.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Anime não encontrado' });
  
  animes.splice(index, 1);
  res.status(204).send();
});

module.exports = app;
