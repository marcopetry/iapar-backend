'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tecnicos', {
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
      } 
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tecnicos');
  }
};
