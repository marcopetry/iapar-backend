const { Model, DataTypes } = require('sequelize')

class Animal extends Model {
  static init(sequelize) {
    super.init(
      {
        id_propriedade: DataTypes.INTEGER,
        identificacao_animal: DataTypes.STRING,
        sexo: DataTypes.ENUM('M', 'F'),
        peso: DataTypes.DOUBLE,
        raca: DataTypes.STRING,
        status: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Propriedade, { foreignKey: 'id_propriedade', as: 'propriedade' })
  }
}

module.exports = Animal
