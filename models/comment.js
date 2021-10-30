'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        as: 'comment_by',
        foreignKey: 'user_Id'
      })
      Comment.belongsTo(models.GamePost, {
        as: 'comment_at',
        foreignKey: 'post_Id'
      })
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
      user_Id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      post_Id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'gameposts',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
