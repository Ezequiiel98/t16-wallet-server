'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT
      },
      concept: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      isEditable: {
        type: Sequelize.BOOLEAN
      },   
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Transactions');
  }
};