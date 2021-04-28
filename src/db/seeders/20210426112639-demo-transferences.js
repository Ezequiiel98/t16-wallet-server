'use strict';
const { transferencesMock } = require('../../utils/mocks')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Transferences', transferencesMock, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Transferences', null, {});
  }
};
