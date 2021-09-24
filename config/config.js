require('dotenv').config()
module.exports = {
  development: {
    database: 'sequelize_hail_development',
    dialect: 'postgres'
  },
  test: {
    database: 'sequelize_hail_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
