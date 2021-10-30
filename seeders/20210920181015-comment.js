'use strict'
const faker = require('faker')
const { User, GamePost } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw: true })
    const posts = await GamePost.findAll({ raw: true })
    const comments = []

    posts.map((post) => {
      for (let i = 0; i < Math.floor(Math.random() * 9); i++) {
        comments.push({
          content: faker.company.bs(),
          user_Id: users[Math.floor(Math.random() * users.length)].id,
          post_Id: post.id,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      }
    })

    // const comments = [...Array(20)].map((_) => ({
    //   content: faker.random.word(),
    //   user_Id: user[Math.floor(Math.random() * users.length)].id,
    //   post_Id: user[Math.floor(Math.random() * posts.length)].id,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }))

    await queryInterface.bulkInsert('comments', comments)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments')
  }
}
