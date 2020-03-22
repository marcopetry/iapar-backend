const Mastite = require('../../models/Mastite')

const util = require('../../utils/conversorStringData')

module.exports = {
  async store(req) {
    const {
      id_animal,
      data_diagnostico,
      tipo_mastite,
      anterior_direita,
      anterior_esquerda,
      posterior_direita,
      posterio_esquerda
    } = req.body
    try {
      const response = await Mastite.create({
        id_animal,
        data_diagnostico: util.formataStringEmData(data_diagnostico),
        tipo_mastite,
        posterio_esquerda,
        posterior_direita,
        anterior_direita,
        anterior_esquerda
      })
      return response
    } catch (error) {
      return false
    }
  }
}
