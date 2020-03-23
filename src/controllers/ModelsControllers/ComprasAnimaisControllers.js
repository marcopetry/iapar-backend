const ComprasAnimais = require('../../models/CompraAnimal')

const utils = require('../../utils/conversorStringData')

module.exports = {
  async store(req) {
    const { id_animal, data_compra, data_nascimento, peso, valor } = req.body

    try {
      const response = await ComprasAnimais.create({
        id_animal,
        data_compra: utils.formataStringEmData(data_compra),
        data_nascimento: utils.formataStringEmData(data_nascimento),
        peso,
        valor
      })
      return response
    } catch (error) {
      return false
    }
  }
}
