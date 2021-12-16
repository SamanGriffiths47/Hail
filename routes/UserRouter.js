const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUsers
)

Router.get(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserProfile
)

Router.delete(
  '/:user_Id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteUser
)

Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateUser
)

module.exports = Router
