const Router = require('express').Router()
const controller = require('../controllers/GamePostController')
const middleware = require('../middleware')

Router.get(
  '/all',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetGames
)
Router.delete(
  '/all',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.DeleteAllGames
)
Router.get(
  '/byid/:post_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GameDetails
)
Router.get(
  '/:name',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GamesByName
)
Router.get(
  '/search/:query',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GameQuery
)

Router.post('/create', controller.CreateGame)

module.exports = Router
