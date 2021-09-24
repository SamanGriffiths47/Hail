'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [...Array(50)].map((_) => ({
      admin: false,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password_digest: faker.datatype.hexaDecimal(12),
      country: faker.address.country(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
