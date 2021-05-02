'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rate.belongsTo(models.Currency, {
        foreignKey: 'currencyId',
        as: "baseCurrency", 
        onDelete: 'CASCADE'
      }); 
    }
  };
  Rate.init({    
    date: DataTypes.DATE,
    buy: DataTypes.FLOAT,
    sell: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Rate',
  });
  return Rate;
};