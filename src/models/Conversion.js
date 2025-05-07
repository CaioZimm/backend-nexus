const { DataTypes } = require('sequelize');
const database = require('../../config/database');

const Conversion = database.define('Conversion', {
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    cryptoName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    brl: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    usd: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'conversions',
    timestamps: true,
});

module.exports = Conversion;