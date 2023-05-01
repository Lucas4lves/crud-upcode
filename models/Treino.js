const db = require("../src/db");
const { Sequelize } = require("sequelize");

const Treino = db.define("Treino", {
    treinoId: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull:false},
    tipo : {type: Sequelize.STRING, allowNull: false},
    series: {type: Sequelize.INTEGER, allowNull: false},
    repeticoes : {type: Sequelize.STRING, allowNull: false},
    AlunoId : {type: Sequelize.INTEGER, allowNull: false}
},
{timestamps: false}
)

module.exports = Treino;