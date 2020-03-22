const { Model, DataTypes } = require('sequelize')

class CompraAnimal extends Model {
  static init(sequelize) {
    super.init(
      {
        id_animal: DataTypes.INTEGER,
        data_compra: DataTypes.DATE,
        data_nascimento: DataTypes.DATE,
        valor: DataTypes.DOUBLE,
        peso: DataTypes.DOUBLE
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

module.exports = CompraAnimal
