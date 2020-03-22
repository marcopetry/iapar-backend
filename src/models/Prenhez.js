const { Model, DataTypes } = require('sequelize')

class Prenhez extends Model {
  static init(sequelize) {
    super.init(
      {
        id_animal: DataTypes.INTEGER,
        id_inseminacao: DataTypes.INTEGER,
        data_diagnostico: DataTypes.DATE
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Animais, { foreignKey: 'id_animal', as: 'animal' })
    this.belongsTo(models.Inseminacao, { foreignKey: 'id_inseminacao', as: 'inseminacao' })
  }
}

module.exports = Prenhez
