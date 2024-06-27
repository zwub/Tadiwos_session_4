const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('student', 'root', 'mysql@123', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;