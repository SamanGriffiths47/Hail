const { Op } = require('sequelize')
const { GamePost, Comment, User } = require('../models')

const GetGames = async (req, res) => {
  try {
    const games = await GamePost.findAll({
      include: [
        {
          model: Comment,
          as: 'post_comments',
          include: [
            {
              model: User,
              as: 'comment_by',
              attributes: { exclude: ['password_digest', 'email'] }
            }
          ]
        }
      ]
    })
    return res.send(games)
  } catch (error) {
    throw error
  }
}

const DeleteAllGames = async (req, res) => {
  try {
    const games = await GamePost.findAll({})
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
    console.log('')
    console.log('')
    console.log(req.body)
    console.log('')
    console.log('')
    const { name } = req.body
    const games = await GamePost.findAll({
      where: {
        title: name
      },
      include: [
        {
          model: Comment,
          as: 'post_comments',
          include: [
            {
              model: User,
              as: 'comment_by',
              attributes: { exclude: ['password_digest', 'email'] }
            }
          ]
        }
      ]
    })
    return res.send(games)
  } catch (error) {
    throw error
  }
}

const GameDetails = async (req, res) => {
  try {
    const games = await GamePost.findByPk(req.params.post_id, {
      include: [
        {
          model: Comment,
          as: 'post_comments',
          include: [
            {
              model: User,
              as: 'comment_by',
              attributes: { exclude: ['password_digest', 'email'] }
            }
          ]
        }
      ]
    })
    return games ? res.send(games) : res.send('Post Not Found')
  } catch (error) {
    return res.send('Post Not Found')
  }
}

const GameQuery = async (req, res) => {
  try {
    const { query } = req.params
    const games = await GamePost.findAll({
      where: {
        title: {
          [Op.iLike]: `%${query}%`
        }
      },
      include: [
        {
          model: Comment,
          as: 'post_comments',
          include: [
            {
              model: User,
              as: 'comment_by',
              attributes: { exclude: ['password_digest', 'email'] }
            }
          ]
        }
      ]
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
  DeleteAllGames,
  GameQuery
}
