'use strict'
const faker = require('faker')
const { User, GamePost } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await User.findAll({ raw: true })
    const post = await GamePost.findAll({ raw: true })

    const comments = [...Array(20)].map((_) => ({
      content: faker.random.word(),
      user_Id: user[Math.floor(Math.random() * user.length)].id,
      post_Id: user[Math.floor(Math.random() * post.length)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('comments', comments)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments')
  }
}
