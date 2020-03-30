const { Model, DataTypes } = require('sequelize')

class Mastite extends Model {
  static init(sequelize) {
    super.init(
      {
        id_animal: DataTypes.INTEGER,
        data_diagnostico: DataTypes.DATE,
        tipo_mastite: DataTypes.ENUM('Clínica', 'Subclínica'),
        anterior_direita: DataTypes.ENUM('Leve', 'Moderada', 'Severa', 'Ausente'),
        anterior_esquerda: DataTypes.ENUM('Leve', 'Moderada', 'Severa', 'Ausente'),
        posterior_direita: DataTypes.ENUM('Leve', 'Moderada', 'Severa', 'Ausente'),
        posterior_esquerda: DataTypes.ENUM('Leve', 'Moderada', 'Severa', 'Ausente')
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

module.exports = Mastite
