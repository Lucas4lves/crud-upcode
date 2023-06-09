'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Alunos", {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull:false},
    nome: {type: Sequelize.STRING, allowNull: false},
    peso: {type: Sequelize.FLOAT, allowNull: false},
},
{timestamps: false})

    await queryInterface.createTable("Treinos", {
    treinoId: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull:false},
    tipo : {type: Sequelize.STRING, allowNull: false},
    series: {type: Sequelize.INTEGER, allowNull: false},
    repeticoes : {type: Sequelize.STRING, allowNull: false},
    AlunoId :{type: Sequelize.INTEGER, allowNull: false}
},
{timestamps: false})    
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Treinos");
    await queryInterface.dropTable("Alunos");
  }
};
