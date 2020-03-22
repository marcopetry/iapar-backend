const { Model, DataTypes } = require('sequelize')

class Medicamento extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        principio_ativo: DataTypes.STRING,
        forma_aplicacao: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }
}

module.exports = Medicamento
