'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('gameposts', 'user_Id')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('gameposts', 'user_Id', Sequelize.INTEGER, {
      after: 'title'
    })
  }
}
