'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('compras_animais', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_animal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'animais', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      data_compra: {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      peso: {
        type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable('compras_animais')
  }
}
