const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.FindComments)
Router.get('/view/:post_id', controller.FindCommentById)
Router.post('/create', controller.CreateComment)
Router.put('/update/:post_id', controller.UpdateComments)
Router.delete('/del/:id', controller.DeleteComment)

module.exports = Router
