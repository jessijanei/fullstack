'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  }
  customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    dob: DataTypes.STRING,
    password: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};