const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

// Rotas para os animes
router.get('/', animeController.getAllAnimes);
router.post('/', animeController.createAnime);
// Aqui você pode adicionar rotas PUT e DELETE

module.exports = router;
