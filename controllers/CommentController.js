const { Comment, User } = require('../models')

const CreateComment = async (req, res) => {
  try {
    const commentBody = {
      user_Id: req.body.user_Id,
      post_Id: req.body.post_Id,
      ...req.body
    }
    let comment = await Comment.create(req.body)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const FindComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const FindCommentById = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {
        post_Id: req.params.post_id
      },
      include: [
        {
          model: User,
          as: 'comment_by'
        }
      ]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const UpdateComments = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let updateComment = await Comment.update(req.body, {
      where: { id: postId },
      returning: true
    })
    res.send(updateComment)
  } catch (error) {}
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.id)
    await Comment.destroy({ where: { id: commentId } })

    res.send({ message: `Comment ${commentId} Deleted` })
  } catch (error) {}
}

module.exports = {
  CreateComment,
  FindComments,
  FindCommentById,
  UpdateComments,
  DeleteComment
}
