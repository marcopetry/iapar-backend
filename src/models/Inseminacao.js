const { Model, DataTypes } = require('sequelize')

class Inseminacao extends Model {
  static init(sequelize) {
    super.init(
      {
        id_vaca: DataTypes.INTEGER,
        id_touro: DataTypes.INTEGER,
        data_inseminacao: DataTypes.DATE
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Animal, { foreignKey: 'id_vaca', as: 'vaca' })
    this.belongsTo(models.Animal, { foreignKey: 'id_touro', as: 'touro' })
  }
}

module.exports = Inseminacao
