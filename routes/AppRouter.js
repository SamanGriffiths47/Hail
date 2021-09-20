const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')
const GamePostRouter = require('./GamePostRouter')

Router.use('/users', UserRouter)
<<<<<<< HEAD
// Router.use('/gameposts/', GamePostRouter)
=======
// Router.use('/gameposts', GamePostRouter)
>>>>>>> e08618572fe80df7f534a7e878bc9f1eec61d6dd
Router.use('/comments,', CommentRouter)

module.exports = Router
