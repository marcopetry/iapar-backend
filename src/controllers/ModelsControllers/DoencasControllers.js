const Doencas = require('../../models/Doenca')

const utils = require('../../utils/conversorStringData')

module.exports = {
  async store(req) {
    const { id_animal, data_diagnostico, diagnostico } = req.body

    try {
      const response = await Doencas.create({
        id_animal,
        diagnostico,
        data_diagnostico: utils.formataStringEmData(data_diagnostico)
      })
      return response
    } catch (error) {
      return false
    }
  }
}
