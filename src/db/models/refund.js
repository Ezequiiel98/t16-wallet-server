'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Refund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Refund.belongsTo(models.Transference, {
        foreignKey: 'transferenceId',
        as: 'originalTransference',
        onDelete: 'CASCADE'
      })
    }
  };
  Refund.init({
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Refund',
  });
  return Refund;
};