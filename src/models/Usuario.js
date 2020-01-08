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
    }, {
      sequelize
    })
  }

 /*  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' });
    this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
  } */
}

module.exports = Usuario;
