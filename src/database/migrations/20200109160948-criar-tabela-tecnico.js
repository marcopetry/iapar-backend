'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tecnicos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ano_formatura: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_registro: {
        type: Sequelize.ENUM('CRMV', 'CREA'),
        allowNull: false,
      }, 
      registro_profissional: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tecnicos');
  }
};
