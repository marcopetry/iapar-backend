'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mastites', {
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
      data_diagnostico: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tipo_mastite: {
        type: Sequelize.ENUM('Clínica', 'Subclínica'),
        allowNull: false
      },
      anterior_direita: {
        type: Sequelize.ENUM('Leve', 'Moderada', 'Severa', 'Ausente'),
        defaultValue: 'Ausente',
        allowNull: false
      },
      anterior_esquerda: {
        type: Sequelize.ENUM('Leve', 'Moderada', 'Severa', 'Ausente'),
        defaultValue: 'Ausente',
        allowNull: false
      },
      posterior_direita: {
        type: Sequelize.ENUM('Leve', 'Moderada', 'Severa', 'Ausente'),
        defaultValue: 'Ausente',
        allowNull: false
      },
      posterior_esquerda: {
        type: Sequelize.ENUM('Leve', 'Moderada', 'Severa', 'Ausente'),
        defaultValue: 'Ausente',
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
    return queryInterface.dropTable('mastites')
  }
}
