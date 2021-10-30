const { Comment } = require('../models')

const CreateComment = async (req, res) => {
  try {
    let ownerId = parseInt(req.body.user_Id)
    let postId = parseInt(req.body.post_Id)
    let commentBody = {
      user_Id: ownerId,
      post_Id: postId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
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
    const comment = await Comment.findAll({
      where: { post_Id: req.params.post_id }
    })
    res.send(comment)
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
    console.log(req.body)
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
