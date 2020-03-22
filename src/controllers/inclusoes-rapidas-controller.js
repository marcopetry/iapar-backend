const Animais = require('../models/Animal')

const JWT = require('../services/auth-service')

const util = require('../utils/verificaUsuarioTemAcessoPropriedade')
module.exports = {
  async cadastrarAnimal(req, res) {
    JWT.authorize(req, res, async tokenDecodificado => {
      const id_propriedade = req.params.id_propriedade
      if (util.verificaUsuarioTemAcessoPropriedade(tokenDecodificado, id_propriedade)) {
        const { identificacao_animal, sexo, peso, raca, status } = req.body
        try {
          const response = await Animais.create({ identificacao_animal, sexo, peso, raca, status, id_propriedade })
          res.status(201).send(response)
        } catch (e) {
          console.log('animal ', e)
          res.status(400).send({ message: 'Problemas ao cadastrar.' })
        }
      } else {
        res.status(401).send({ message: 'Você não pode editar nessa propriedade' })
      }
    })
  }
}
