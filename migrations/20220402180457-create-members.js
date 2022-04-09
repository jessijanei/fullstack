"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("members", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      member_since: {
        type: Sequelize.STRING,
      },
      member_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tier_level: {
        type: Sequelize.STRING,
      },
      reward_points_available: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint("members", {
      fields: ["email"],
      type: "unique",
      name: "email_unique_constraint",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("members");
  },
};
