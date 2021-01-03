'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Customers', [{
        identityNumber: '1234567898765432',
        fullName: 'tommy susanto',
        address: 'jl.kayangan',
        birthDate: '10-9-2000',
        gender: 'male',
        updatedAt: new Date,
        createdAt: new Date
      },
      {
        identityNumber: '1234567898765431',
        fullName: 'tonny susanto',
        address: 'jl.tempe',
        birthDate: '10-9-2001',
        gender: 'male',
        updatedAt: new Date,
        createdAt: new Date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
