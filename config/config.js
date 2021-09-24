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

{
  "development": {
    "database": "sequelize_hail_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "sequelize_hail_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "sequelize_hail",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
