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
      });
      Account.hasMany(models.FixedTermDeposit, {
        foreignKey: 'accountId',
        as: 'fixed_term_deposits',
        onDelete: 'CASCADE'
      }); 
      Account.hasOne(models.Transference, {
        foreignKey: 'accountIssuerId',
        as: 'accountIssuer',
        onDelete: 'CASCADE'
      });     
      Account.hasOne(models.Transference, {
        foreignKey: 'accountAcquierId',
        as: 'accountAcquier',
        onDelete: 'CASCADE'
      });     
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