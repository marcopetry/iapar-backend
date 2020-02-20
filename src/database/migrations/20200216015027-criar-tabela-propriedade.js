'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('propriedades', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true, 
                autoIncrement: true,
                allowNull: false,
            },
            id_proprietario: {
                type: Sequelize.INTEGER,
                primaryKey: false,
                allowNull: false,
                autoIncrement: false,
                references: { model: 'proprietarios', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            nome_propriedade: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            longitude: {
                type: Sequelize.DOUBLE,
                allowNull: false
            },
            latitude: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            qtd_pessoas_envolvidas_atividade: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            data_inicio_programa: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            data_proxima_visita: {
                type: Sequelize.DATE,
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
        return queryInterface.dropTable('propriedades');
    }
};
