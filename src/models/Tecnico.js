const { Model, DataTypes } = require('sequelize');

class Tecnico extends Model {
    static init(sequelize) {
        super.init({
            id_usuario: DataTypes.INTEGER,
            ano_formatura: DataTypes.STRING,
            tipo_registro: DataTypes.ENUM('CRMV', 'CREA'),
            registro_profissional: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Tecnico;
