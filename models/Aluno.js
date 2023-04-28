const db = require("../src/db");
const { Sequelize } = require("sequelize");
const Treino = require("./Treino");

const Aluno = db.define("aluno", {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull:false},
    nome: {type: Sequelize.STRING, allowNull: false},
    peso: {type: Sequelize.FLOAT, allowNull: false},
    treinoId : {type: Sequelize.INTEGER, allowNull: false}   
},
{timestamps: false}
)

Aluno.hasMany(Treino, {
    foreignKey: 'treinoId'
})

Treino.belongsTo(Aluno);

module.exports = Aluno;
