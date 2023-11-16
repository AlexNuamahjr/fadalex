const {Sequelize} = require('sequelize');

DB_NAME = process.env.DB_NAME;
DB_USER = process.env.DB_USER;
DB_PASS = process.env.DB_PASS;
DB_HOST = process.env.DB_HOST;
DB_DIALECT = process.env.DB_DIALECT;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS,{
    host: DB_HOST,
    dialect: DB_DIALECT
})

module.exports = sequelize;