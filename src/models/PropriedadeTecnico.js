const { Model, DataTypes } = require('sequelize');

class PropriedadeTecnico extends Model {
    static init(sequelize) {
        super.init({
            id_tecnico: DataTypes.INTEGER,
            id_propriedade: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = PropriedadeTecnico;
