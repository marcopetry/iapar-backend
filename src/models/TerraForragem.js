const { Model, DataTypes } = require('sequelize')

class TerraForragens extends Model {
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

  static associate(models) {
    this.belongsTo(models.Forragen, { foreignKey: 'id_forragem', as: 'forragem' })
    this.belongsTo(models.InfoPropriedade, { foreignKey: 'id_info_propriedade', as: 'info_propriedade' })
  }
}

module.exports = TerraForragens
