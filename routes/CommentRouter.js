const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.GetComments)
Router.get('/view/:comment_id', controller.GetCommentDetails)
Router.post('/:user_id', controller.CreateComment)
Router.put('/:comment_id', controller.UpdateComment)
Router.delete('/del/:comment_id', controller.DeleteComment)

module.exports = Router
