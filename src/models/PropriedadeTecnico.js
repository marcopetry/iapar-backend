const { Model, DataTypes } = require('sequelize');

class PropriedadeTecnico extends Model {
    static init(sequelize) {
        super.init({
            id_tecnico: DataTypes.INTEGER,
            id_propriedade: DataTypes.INTEGER
        }, {
            sequelize
        });
    }
    static associate(models){
        this.hasMany(models.InfoPropriedade, { foreignKey: 'id_propriedade_tecnico', as: 'info_propriedade' });
    }
}

module.exports = PropriedadeTecnico;
