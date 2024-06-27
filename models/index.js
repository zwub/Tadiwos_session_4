const Sequelize = require('sequelize');
const sequelize = require('../config/dbconfig');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./usermodel')(sequelize, Sequelize.DataTypes);

module.exports = db;