const { Model, DataTypes } = require('sequelize')

class Forragen extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_forragem: DataTypes.STRING,
        tipo_forragem: DataTypes.ENUM('Anual', 'Perene')
      },
      {
        sequelize
      }
    )
  }
}

module.exports = Forragen
