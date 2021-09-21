const Router = require('express').Router()
const controller = require('../controllers/GamePostController')

Router.get('/', controller.GetGames)
Router.get('', controller.GameDetails)
Router.post('/create', controller.CreateGame)

module.exports = Router
