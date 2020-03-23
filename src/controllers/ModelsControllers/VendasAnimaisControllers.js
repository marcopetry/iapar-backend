const VendaAnimais = require('../../models/VendaAnimal')

const utils = require('../../utils/conversorStringData')

module.exports = {
  async store(req) {
    const { id_animal, data_venda, motivo, valor, destino } = req.body

    try {
      const response = await VendaAnimais.create({
        id_animal,
        data_venda: utils.formataStringEmData(data_venda),
        motivo,
        valor,
        destino
      })
      return response
    } catch (error) {
      return false
    }
  }
}
