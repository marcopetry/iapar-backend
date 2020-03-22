const { Model, DataTypes } = require('sequelize')

class Doenca extends Model {
  static init(sequelize) {
    super.init(
      {
        id_animal: DataTypes.INTEGER,
        diagnostico: DataTypes.STRING,
        data_diagnostico: DataTypes.DATE
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Animal, { foreignKey: 'id_animal', as: 'animal' })
  }
}

module.exports = Doenca
