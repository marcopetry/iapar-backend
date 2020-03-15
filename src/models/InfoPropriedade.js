const { Model, DataTypes } = require('sequelize')

class InfoPropriedade extends Model {
  static init(sequelize) {
    super.init(
      {
        data_insercao: DataTypes.DATE,
        area_total: DataTypes.DOUBLE,
        total_terra_arrendada: DataTypes.DOUBLE,
        area_bovinucultura: DataTypes.DOUBLE,
        area_pasto_perene: DataTypes.DOUBLE,
        area_lavoura_verao: DataTypes.DOUBLE,
        area_lavoura_inverno: DataTypes.DOUBLE,
        preco_medio_terra_nua: DataTypes.DOUBLE,
        preco_medio_arrendamento: DataTypes.DOUBLE,
        qtd_pessoas_envolvidas_atividade: DataTypes.INTEGER
        //mapa_uso_solo: DataTypes.BLOB
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.PropriedadeTecnico, { foreignKey: 'id_propriedade_tecnico', as: 'info_propriedade' })
  }
}

module.exports = InfoPropriedade
