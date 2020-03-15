const { Model, DataTypes } = require('sequelize')

class TerraForragem extends Model {
  static init(sequelize) {
    super.init(
      {
        area: DataTypes.DOUBLE,
        data_formacao: DataTypes.DATEONLY,
        tipo_terra: DataTypes.ENUM('Própria', 'Arrendada'),
        observacao: DataTypes.STRING,
        custo_medio_formacao: DataTypes.DOUBLE,
        vida_util: DataTypes.DOUBLE
      },
      {
        sequelize
      }
    )
  }
}

module.exports = TerraForragem
