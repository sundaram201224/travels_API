'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Passengers', [
      {
        name: "Sundaram",
        address: "1, Bharthi Park Cross, KK Pudur, Coimbatore-38",
        age: 24,
        gender: "Male",
        contact: "9876543222",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Anjali",
        address: "12, MG Road, Bangalore",
        age: 22,
        gender: "Female",
        contact: "9876541234",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
    
    
  
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Passengers', null, {});
  }
  };

  