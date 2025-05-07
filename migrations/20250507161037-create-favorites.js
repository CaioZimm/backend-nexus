'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('favorites', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      userId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      cryptoId: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('favorites');
  }
};
