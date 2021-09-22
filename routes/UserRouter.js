const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUsers
)
Router.get('/:user_id', controller.GetUserProfile)
Router.post('/create', controller.CreateUser)
Router.delete('/:user_Id', controller.deleteUser)

module.exports = Router
