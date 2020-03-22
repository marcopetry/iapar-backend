const { Model, DataTypes } = require('sequelize')

class Morte extends Model {
  static init(sequelize) {
    super.init(
      {
        id_animal: DataTypes.INTEGER,
        data_obito: DataTypes.DATE,
        causa_morte: DataTypes.STRING
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

module.exports = Morte
