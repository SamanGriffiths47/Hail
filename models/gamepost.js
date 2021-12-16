'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GamePost extends Model {
    static associate(models) {
      GamePost.hasMany(models.Comment, {
        as: 'post_comments',
        foreignKey: 'post_Id'
      })
      GamePost.belongsToMany(models.User, {
        foreignKey: 'post_Id',
        as: 'commenters',
        through: models.Comment
      })
    }
  }
  GamePost.init(
    {
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'GamePost',
      tableName: 'gameposts'
    }
  )
  return GamePost
}
