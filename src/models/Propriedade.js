const { Model, DataTypes } = require('sequelize');
const Usuario = require('./Usuario');

class Propriedade extends Model {
    static init(sequelize) {
        super.init({
            id_proprietario: DataTypes.INTEGER,
            nome_propriedade: DataTypes.STRING,
            longitude: DataTypes.DOUBLE,
            latitude: DataTypes.DOUBLE,
            qtd_pessoas_envolvidas_atividade: DataTypes.INTEGER,
            data_inicio_programa: DataTypes.DATE,
            data_proxima_visita: DataTypes.DATE
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Proprietario, { foreignKey: 'id_proprietario', as: 'dono_propriedade' });
        this.belongsToMany(models.Tecnico, { foreignKey: 'id_propriedade', through: 'propriedade_tecnicos', as: 'tecnicos' });
    }
}

module.exports = Propriedade;
