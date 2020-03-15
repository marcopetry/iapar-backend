'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('terra_forragens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_info_propriedade: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        allowNull: false,
        autoIncrement: false,
        references: { model: 'info_propriedades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_forragem: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        allowNull: false,
        autoIncrement: false,
        references: { model: 'forragens', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      area: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      data_formacao: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      tipo_terra: {
        type: Sequelize.ENUM('Própria', 'Arrendada'),
        allowNull: false
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      custo_medio_formacao: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      vida_util: {
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
    return queryInterface.dropTable('terra_forragens')
  }
}
