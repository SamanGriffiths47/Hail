'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.GamePost, {
        as: 'posts',
        foreignKey: 'user_Id'
      })
      User.hasMany(models.Comment, {
        as: 'comments',
        foreignKey: 'user_Id'
      })
    }
  }
  User.init(
    {
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password_digest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city_state: DataTypes.STRING,
      country: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
