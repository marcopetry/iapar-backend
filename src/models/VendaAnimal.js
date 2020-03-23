const { Model, DataTypes } = require('sequelize')

class VendasAnimais extends Model {
  static init(sequelize) {
    super.init(
      {
        id_animal: DataTypes.INTEGER,
        data_venda: DataTypes.DATE,
        motivo: DataTypes.STRING,
        valor: DataTypes.DOUBLE,
        destino: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Animais, { foreignKey: 'id_animal', as: 'animal' })
  }
}

module.exports = VendasAnimais
