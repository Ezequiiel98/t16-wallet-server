'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.hasMany(models.Transaction, {
        foreignKey: 'accountId',
        as: 'transactions',
        onDelete: 'CASCADE'
      })
    }
  };
  Account.init({
    currency: DataTypes.INTEGER,
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'User', key: 'id' },
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};