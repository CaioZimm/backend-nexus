const favoriteRepository = require('../repositories/favoriteRepository')

exports.toggleFavorites = async (userId, cryptoName) => {
    return await favoriteRepository.toggleFavorite(userId, cryptoName);
};

exports.listFavorites = async (userId) => {
    const favorites = await favoriteRepository.indexFavorites(userId);

    if (!favorites || favorites.length === 0) {
            throw new Error('Sem favoritos até o momento', 400);
    }

    return favorites;
};