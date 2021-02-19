'use strict';
const fs = require('fs')
let dataQuestion = JSON.parse( fs.readFileSync('./db/questions.json', 'utf-8'))
dataQuestion.forEach(e => {
  e.createdAt = new Date()
  e.updatedAt = new Date()
})
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Jokes', dataQuestion, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Jokes', null, {});
  }
};
