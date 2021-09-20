'use strict'
const faker = require('faker')
const { User } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await User.findAll({ raw: true })
    const posts = [...Array(20)].map((_) => ({
      user_Id: user[Math.floor(Math.random() * user.length)].id,
      image: faker.image.food(),
      description: faker.commerce.productDescription(),
      title: faker.commerce.productName(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('gameposts', posts)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('gameposts')
  }
}
