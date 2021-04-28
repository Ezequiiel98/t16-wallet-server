'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT
      },
      isRefunded: {
        type: Sequelize.BOOLEAN
      },
      accountIssuerId: {
        type: Sequelize.INTEGER,
        references: { model: 'Accounts', key: 'id' },
        onDelete: 'CASCADE'
      },
      accountAcquierId: {
        type: Sequelize.INTEGER,
        references: { model: 'Accounts', key: 'id' },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transferences');
  }
};