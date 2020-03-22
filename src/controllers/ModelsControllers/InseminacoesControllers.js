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
  }
}
