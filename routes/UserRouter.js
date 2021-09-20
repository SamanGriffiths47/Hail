const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUserProfile)
Router.get('/:user_id', controller.GetUserProfile)
Router.post('/create/', controller.CreateUser)

module.exports = Router
