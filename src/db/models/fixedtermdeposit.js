'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FixedTermDeposit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FixedTermDeposit.hasMany(models.Transaction, {         
        foreignKey: 'depositId',
        as: 'transactions',
        onDelete: 'CASCADE'
      })
    }
  };
  FixedTermDeposit.init({
    amount: DataTypes.FLOAT,
    opening_date: DataTypes.DATE,
    closing_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'FixedTermDeposit',
  });
  return FixedTermDeposit;
};