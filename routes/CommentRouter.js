const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.FindComments)
Router.get('/view/:comment_id', controller.FindCommentById)
Router.post('/create', controller.CreateComment)
Router.put('/:comment_id', controller.UpdateComments)
Router.delete('/del/:comment_id', controller.DeleteComment)

module.exports = Router
