const { GamePost, User } = require('../models')

const GetGames = async (req, res) => {
  try {
    const games = await GamePost.findAll({
      include: [{ model: User, as: 'commenters' }]
    })
    return res.send(games)
  } catch (error) {
    throw error
  }
}

const DeleteAllGames = async (req, res) => {
  try {
    const games = await GamePost.findAll({
      include: [{ model: User, as: 'commenters' }]
    })
    games.forEach((game) => {
      GamePost.destroy({ where: { id: game.id } })
    })
    return res.send('All Games Deleted')
  } catch (error) {
    throw error
  }
}

const GamesByName = async (req, res) => {
  try {
    const { name } = req.params
    const games = await GamePost.findAll({ where: { title: `${name}` } })
    return res.send(games)
  } catch (error) {
    throw error
  }
}

const GameDetails = async (req, res) => {
  try {
    const games = await GamePost.findByPk(req.params.post_id, {
      include: [{ model: User, as: 'commenters' }]
    })
    return res.send(games)
  } catch (error) {
    throw error
  }
}

const CreateGame = async (req, res) => {
  try {
    const { background_image, description, name, user_Id, ...rest } = req.body

    let gamePostBody = {
      image: background_image,
      description: description,
      title: name,
      user_Id: user_Id
    }

    const result = await GamePost.create(gamePostBody)
    return res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGames,
  GameDetails,
  CreateGame,
  GamesByName,
  DeleteAllGames
}
