const { GamePost, User } = require('../models')

const GetGames = async (req, res) => {
  try {
    const games = await GamePost.findAll()
    res.send(games)
  } catch (error) {
    throw error
  }
}

const GamesByName = async (req, res) => {
  try {
    const { name } = req.params
    const games = await GamePost.findAll({ where: { title: `${name}` } })
    res.send(games)
  } catch (error) {
    throw error
  }
}

const GameDetails = async (req, res) => {
  try {
    const games = await GamePost.findByPk(req.params.post_id, {
      include: [{ model: User, as: 'users' }]
    })
    res.send(games)
  } catch (error) {
    throw error
  }
}

const CreateGame = async (req, res) => {
  try {
    let userId = parseInt(req.body.user_Id)
    const { image, description, title } = req.body

    let gamePostBody = {
      image,
      description,
      title,
      user_Id: userId
    }

    const result = await GamePost.create(gamePostBody)
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGames,
  GameDetails,
  CreateGame,
  GamesByName
}
