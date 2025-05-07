const Favorite = require('../models/Favorite');

exports.getFavorite = async (userId, cryptoName) => {
    const favorite = await Favorite.findOne({ where: { userId, cryptoName }})

    if(favorite){
        await favorite.destroy();
        return { favorited: false }
    }
    else{
        const newFavorite = await Favorite.create({ userId, cryptoName });
        return { favorited: true }
    }
}

exports.indexFavorites = async (userId) => {
    try {
        const favorites = await Favorite.findAll({ where: { userId }})

        if (!favorites || favorites.length === 0) {
            throw new Error('Sem favoritos até o momento');
        }

        return favorites;

    } catch (error) {
        throw new Error('Erro ao listar favoritos: ' + error.message);
    }
}