const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      foto: DataTypes.BLOB,
      cpf: DataTypes.STRING,
      cidade: DataTypes.STRING,
      rua: DataTypes.STRING,
      numero: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cep: DataTypes.STRING,
      telefone: DataTypes.STRING,
      tipo_usuario: DataTypes.STRING,
      verificado: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }
  //uso essa associação pra trazer os dados mais organizados pro front-end
  static associate(models) {
    this.hasOne(models.Tecnico, { foreignKey: 'id', as: 'tecnico' });
  }
 
}

module.exports = Usuario;
