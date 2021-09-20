'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GamePost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GamePost.belongsTo(models.User, {
        as: 'postBy',
        foreignKey: 'user_Id'
      })
      GamePost.hasMany(models.Comment, {
        as: 'post_comments',
        foreignKey: 'post_Id'
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
      },

      user_Id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
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
