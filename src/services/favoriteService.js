const favoriteRepository = require('../repositories/favoriteRepository')

exports.getFavorites = async (userId, cryptoName) => {
    return await favoriteRepository.getFavorite(userId, cryptoName);
};

exports.listFavorites = async (userId) => {
    return await favoriteRepository.indexFavorites(userId);
};