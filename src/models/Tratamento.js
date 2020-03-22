const { Model, DataTypes } = require('sequelize')

class Tratamento extends Model {
  static init(sequelize) {
    super.init(
      {
        id_animal: DataTypes.INTEGER,
        id_medicamento: DataTypes.INTEGER,
        data_aplicacao: DataTypes.DATE,
        dose_aplicada: DataTypes.DOUBLE
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Animais, { foreignKey: 'id_animal', as: 'animal' })
    this.belongsTo(models.Animais, { foreignKey: 'id_medicamento', as: 'medicamento' })
  }
}

module.exports = Tratamento
