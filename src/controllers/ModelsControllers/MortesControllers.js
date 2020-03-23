const Mortes = require('../../models/Morte')

const utils = require('../../utils/conversorStringData')

module.exports = {
  async store(req) {
    const { id_animal, data_obito, causa_morte } = req.body

    try {
      const response = await Mortes.create({
        id_animal,
        data_obito: utils.formataStringEmData(data_obito),
        causa_morte
      })
      return response
    } catch (e) {
      return false
    }
  }
}
