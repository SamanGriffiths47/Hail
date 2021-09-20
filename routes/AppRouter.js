const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')
const GamePostRouter = require('./GamePostRouter')
const AuthRouter = require('./AuthRouter')
Router.use('/users', UserRouter)
// Router.use('/gameposts', GamePostRouter)
Router.use('/comments', CommentRouter)
Router.use('/auth', AuthRouter)

module.exports = Router
