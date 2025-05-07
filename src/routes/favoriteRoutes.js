const express = require('express');
const favoriteController = require('../controllers/favoriteController')
const authMiddleware = require('../middlewares/authMiddleware');
const routes = express.Router()

routes.post('/favorite', authMiddleware, favoriteController.getFavorites);
routes.get('/list', authMiddleware, favoriteController.listFavorites);

module.exports = routes;