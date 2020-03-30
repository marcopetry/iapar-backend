const Inseminacao = require('../../models/Inseminacoes')

const utils = require('../../utils/conversorStringData')

module.exports = {
  async store(req) {
    const { id_touro, id_vaca, data_inseminacao } = req.body

    try {
      const response = await Inseminacao.create({
        id_touro,
        id_vaca,
        data_inseminacao: utils.formataStringEmData(data_inseminacao)
      })
      return response
    } catch (error) {
      return false
    }
  },

  async retornaUltimaInseminacao(req) {
    const id_vaca = req.params.id_vaca
    console.log(id_vaca)

    try {
      const response = await Inseminacao.findOne({
        where: {
          id_vaca
        }
      })
      return response
    } catch (error) {
      return false
    }
  }
}
