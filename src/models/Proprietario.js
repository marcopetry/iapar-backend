const { Model, DataTypes } = require('sequelize');

class Proprietario extends Model {
    static init(sequelize) {
        super.init({
            //id: DataTypes.INTEGER,
            cnpj: DataTypes.STRING,
        }, {
            sequelize
        });
    }
}

module.exports = Proprietario;
