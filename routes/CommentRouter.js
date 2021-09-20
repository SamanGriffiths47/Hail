const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.FindComments)
Router.get('/view/:comment_id', controller.FindCommentById)
Router.post('/:user_id', controller.CreateComment)
Router.put('/:comment_id', controller.UpdateComments)
Router.delete('/del/:comment_id', controller.DeleteComment)

module.exports = Router
//1
