'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('info_propriedades', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_propriedade_tecnico: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        allowNull: false,
        autoIncrement: false,
        references: { model: 'propriedade_tecnicos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      data_insercao: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      area_total: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      total_terra_arrendada: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      area_bovinucultura: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      area_pasto_perene: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      area_lavoura_verao: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      area_lavoura_inverno: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      preco_medio_terra_nua: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      preco_medio_arrendamento: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      mapa_uso_solo: {
        type: Sequelize.BLOB,
        allowNull: true
      },
      qtd_pessoas_envolvidas_atividade: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('info_propriedades')
  }
}
