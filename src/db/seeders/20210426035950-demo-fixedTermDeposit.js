'use strict';
const { fixedTermDepositsMock } = require('../../utils/mocks');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('FixedTermDeposits', fixedTermDepositsMock, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('FixedTermDeposits', null, {});
  }
};
