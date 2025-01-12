'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trips', [
      {
        destination: "Paris",
        start_date: "2025-02-15",
        end_date: "2025-02-22",
        trip_type: "vacation",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        destination: "Rome",
        start_date: "2025-03-01",
        end_date: "2025-03-07",
        trip_type: "vacation",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trips', null, {});
  }
  };