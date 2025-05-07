const { DataTypes } = require('sequelize');
const database = require('../../config/database');

const Favorite = database.define('Favorite', {
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    cryptoName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'favorites',
    timestamps: false
});

module.exports = Favorite;