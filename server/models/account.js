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
      // define association here
    }
  };
  Account.init({
    type: DataTypes.STRING,
    balance: DataTypes.STRING,
    accountNumber: DataTypes.FLOAT,
    CustomerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};