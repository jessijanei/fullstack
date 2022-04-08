'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      member_since: {
        type: Sequelize.STRING
      },
      member_number: {
        type: Sequelize.STRING
      },
      tier_level: {
        type: Sequelize.STRING
      },
      reward_points_available: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('members');
  }
};