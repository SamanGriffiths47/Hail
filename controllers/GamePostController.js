const { GamePost } = require('../models/gamepost')

const GetGames = async (req, res) => {
  try {
    const games = await GamePost.findAll()
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
    let images = req.body.content.image
    let descriptions = req.body.content.description
    let titles = req.body.content.title
    let userId = parserInt(req.body.contnent.user_Id)
    let body = {
      image: images,
      description: descriptions,
      title: titles,
      user_Id: userId
    }
    const result = await GamePost.create(body)
    res.send(result)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGames,
  GameDetails,
  CreateGame
}
