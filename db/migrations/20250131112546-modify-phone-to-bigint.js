'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customer.model')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('customers', 'phone', {
      type: Sequelize.STRING, // ✅ Cambiamos de INTEGER a STRING
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('customers', 'phone', {
      type: Sequelize.INTEGER, // 🔄 Revertimos a INTEGER si deshacemos la migración
      allowNull: true,
    });
  },
};
