const Router = require('express').Router()
const controller = require('../controllers/GamePostController')
const middleware = require('../middleware')

Router.get('/', controller.GetGames)
Router.get('/details', controller.GameDetails)
Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateGame
)

module.exports = Router
