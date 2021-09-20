const { User } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userProfile = await User.findByPk(req.params.user_id, {
      include: [{ model: Comments, as: 'comments' }]
    })
    res.send(userProfile)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let name = req.body.content.userName
    let emails = req.body.content.email
    let body = {
      userName: name,
      email: emails,
      created: new Date(),
      updated: new Date()
    }
    const result = await User.create(body)
    res.send(result)
  } catch (error) {
    throw error
  }
}

const deleteUser = async (req, res) => {
  try {
    let userId = parseInt(req, params.user_Id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Deleting user ${userId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUserProfile,
  CreateUser,
  deleteUser
}
