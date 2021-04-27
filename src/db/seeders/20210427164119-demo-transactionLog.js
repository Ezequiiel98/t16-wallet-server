'use strict';
const { transactionLogsMock } = require('../../utils/mocks')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TransactionLogs', transactionLogsMock, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TransactionLogs', null, {});
  }
};
