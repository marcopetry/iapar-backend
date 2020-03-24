const { Model, DataTypes } = require('sequelize')

class Prenheze extends Model {
  static init(sequelize) {
    super.init(
      {
        id_vaca: DataTypes.INTEGER,
        id_touro: DataTypes.INTEGER,
        id_inseminacao: DataTypes.INTEGER,
        data_diagnostico: DataTypes.DATE,
        tipo_prenhez: DataTypes.ENUM('Inseminação', 'Monta natural'),
        data_prenhez: DataTypes.INTEGER
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Animais, { foreignKey: 'id_vaca', as: 'vaca' })
    this.belongsTo(models.Animais, { foreignKey: 'id_touro', as: 'touro' })
    this.belongsTo(models.Inseminacoes, { foreignKey: 'id_inseminacao', as: 'inseminacao' })
  }
}

module.exports = Prenheze
