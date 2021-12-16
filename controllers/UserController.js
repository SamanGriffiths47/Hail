const { User, GamePost } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll({})
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userProfile = await User.findByPk(req.params.user_id, {
      attributes: { exclude: ['password_digest'] },
      include: [
        {
          model: GamePost,
          as: 'commented'
        }
      ]
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
    let passwords = req.body.content.password
    let city_states = req.body.content.city_state
    let countries = req.body.content.country
    let body = {
      admin: false,
      userName: name,
      email: emails,
      password_digest: passwords,
      city_state: city_states,
      country: countries,
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
    let userId = parseInt(req.params.user_Id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `User ${userId} Deleted` })
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
