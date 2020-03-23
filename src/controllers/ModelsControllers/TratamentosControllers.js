const Tratamento = require('../../models/Tratamento')

const utils = require('../../utils/conversorStringData')

module.exports = {
  async store(req) {
    const { id_animal, id_medicamento, data_aplicacao, dose_aplicada } = req.body

    try {
      const response = await Tratamento.create({
        id_animal,
        id_medicamento,
        data_aplicacao: utils.formataStringEmData(data_aplicacao),
        dose_aplicada
      })
      return response
    } catch (error) {
      return false
    }
  }
}
