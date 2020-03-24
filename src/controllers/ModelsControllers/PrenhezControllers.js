const Prenhez = require('../../models/Prenhez')

module.exports = {
  async store(req) {
    const { id_inseminacao, id_vaca, id_touro, data_diagnostico, tipo_prenhez, data_prenhez } = req.body

    try {
      const response = await Prenhez.create({
        id_inseminacao,
        id_vaca,
        id_touro,
        data_diagnostico,
        tipo_prenhez,
        data_prenhez
      })
      return response
    } catch (error) {
      return false
    }
  }
}
