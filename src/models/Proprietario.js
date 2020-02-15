const { Model, DataTypes } = require('sequelize');
const Usuario = require('./Usuario');

class Proprietario extends Model {
    static init(sequelize) {
        super.init({
            //id_usuario: DataTypes.INTEGER,
            cnpj: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'id_usuario', as: 'usuario' });
    }
}
//Proprietario.belongsTo(Usuario, {foreignKey: 'id_usuario'});

module.exports = Proprietario;
