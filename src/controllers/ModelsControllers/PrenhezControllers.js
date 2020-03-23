const Prenhez = require('../../models/Prenhez')

module.exports = {
  async store(req) {
    const { id_inseminacao, id_animal, data_diagnostico } = req.body

    try {
      const response = await Prenhez.create({ id_inseminacao, id_animal, data_diagnostico })
      return response
    } catch (error) {
      return false
    }
  }
}
