const { Model, DataTypes } = require('sequelize')

class Parto extends Model {
  static init(sequelize) {
    super.init(
      {
        id_mae: DataTypes.INTEGER,
        id_bezerro: DataTypes.INTEGER,
        peso: DataTypes.DOUBLE,
        condicao_nascimento: DataTypes.STRING,
        data_parto: DataTypes.DATE
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Animais, { foreignKey: 'id_mae', as: 'mae' })
    this.belongsTo(models.Animais, { foreignKey: 'id_bezerro', as: 'filhote' })
  }
}

module.exports = Parto
