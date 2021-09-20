const { GamePost } = require('../models')

const GetGames = async (req, res) => {
  try {
    const games = await GamePost.findAll()
    res.send(games)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGames
}
