const Router = require('express').Router()
const controller = require('../controllers/GamePostController')
const middleware = require('../middleware')

Router.get('/all', controller.GetGames)
Router.delete('/all', controller.DeleteAllGames)
Router.get('/details', controller.GameDetails)
Router.get('/:name', controller.GamesByName)
Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateGame
)

module.exports = Router
