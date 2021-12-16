const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindComments
)
Router.get(
  '/view/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindCommentById
)
Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
Router.put(
  '/update/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComments
)
Router.delete(
  '/del/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

module.exports = Router
