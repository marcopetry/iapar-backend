const { Model, DataTypes } = require('sequelize');

class Proprietario extends Model {
    static init(sequelize) {
        super.init({
            cnpj: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
        this.hasMany(models.Propriedade, { foreignKey: 'propriedade_proprietario', as: 'propriedade_proprietario' });
    }
}

module.exports = Proprietario;
