const Parto = require('../../models/Parto')

const util = require('../../utils/conversorStringData')

module.exports = {
  async store(req) {
    const { id_mae, id_bezerro, data_parto, peso, condicao_nascimento } = req.body

    try {
      const response = await Parto.create({
        id_bezerro,
        id_mae,
        data_parto: util.formataStringEmData(data_parto),
        peso,
        condicao_nascimento
      })
      return response
    } catch (e) {
      return false
    }
  }
}
