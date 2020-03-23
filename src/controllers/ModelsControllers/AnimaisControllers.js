const Animais = require('../../models/Animal')

module.exports = {
  async store(req) {
    const id_propriedade = req.params.id_propriedade
    const { identificacao_animal, sexo, peso, raca, status } = req.body

    try {
      const response = await Animais.create({ identificacao_animal, sexo, peso, raca, status, id_propriedade })
      return response
    } catch (e) {
      return false
    }
  },

  async allAnimalsForProperty(req) {
    const id_propriedade = req.params.id_propriedade

    try {
      const response = await Animais.findAll({ where: { id_propriedade } })
      return response
    } catch (error) {
      return false
    }
  },

  async updateVendido(id) {
    try {
      const [, response] = await Animais.update({ status: 'Vendido' }, { returning: true, where: { id } })
      return response
    } catch (e) {
      return false
    }
  }
}
