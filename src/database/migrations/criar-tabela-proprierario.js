'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('proprietarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      cnpj: {
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
    return queryInterface.dropTable('proprietarios');
  }
};
