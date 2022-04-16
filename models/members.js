'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.customer = members.hasMany(models.Customer, {
      //   foreignKey: 'members_id'

      // })
    }
  }
  members.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    member_since: DataTypes.STRING,
    member_number: DataTypes.STRING,
    tier_level: DataTypes.STRING,
    reward_points_available: DataTypes.STRING,
    password: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'members',
  });
  return members;
};