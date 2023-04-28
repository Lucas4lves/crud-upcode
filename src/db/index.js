const {Sequelize} = require("sequelize");
const sequelize = new Sequelize('crud_upcode', 'root','runrunrun64@', {
    host:'localhost',
    dialect: 'mysql',
})



module.exports = sequelize;

