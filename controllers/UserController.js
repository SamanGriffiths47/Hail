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
    let email = req.body.content.email
    let body = {
      userName: name,
      email: emails,
      created: new Date(),
      updated: new Date()
    }
  } catch (error) {
    throw error
  }
}
