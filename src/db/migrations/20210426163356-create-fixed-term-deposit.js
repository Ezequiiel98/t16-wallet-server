'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FixedTermDeposits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT
      },
      opening_date: {
        type: Sequelize.DATE
      },
      closing_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('FixedTermDeposits');
  }
};