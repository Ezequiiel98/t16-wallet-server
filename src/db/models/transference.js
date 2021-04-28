'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transference extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transference.hasMany(models.Transaction, {
        foreignKey: 'transferenceId',
        as: 'transactions',
        onDelete: 'CASCADE'
      });
      Transference.belongsTo(models.Account, {
        foreignKey: 'accountIssuerId',        
        onDelete: 'CASCADE'
      });
      Transference.belongsTo(models.Account, {
        foreignKey: 'accountAcquierId',        
        onDelete: 'CASCADE'
      });
    }
  };
  Transference.init({
    amount: DataTypes.FLOAT,
    isRefunded: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transference',
  });
  return Transference;
};