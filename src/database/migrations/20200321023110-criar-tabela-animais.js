'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('animais', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_propriedade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'propriedades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      identificacao_animal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sexo: {
        type: Sequelize.ENUM('M', 'F'),
        allowNull: false
      },
      peso: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      raca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('animais')
  }
}
