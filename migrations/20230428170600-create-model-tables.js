'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("alunos", {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull:false},
    nome: {type: Sequelize.STRING, allowNull: false},
    peso: {type: Sequelize.FLOAT, allowNull: false},   
},
{timestamps: false})

    await queryInterface.createTable("treinos", {
    treinoId: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull:false},
    tipo : {type: Sequelize.STRING, allowNull: false},
    series: {type: Sequelize.INTEGER, allowNull: false},
    repeticoes : {type: Sequelize.STRING, allowNull: false}
},
{timestamps: false})

    await queryInterface.addColumn('Alunos', 'treinoId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Alunos',
          key : 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    })
    
},

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Alunos", "treinoId");
    await queryInterface.dropTable("alunos");
    await queryInterface.dropTable("treinos");
  }
};
