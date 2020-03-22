const AnimalController = require('./ModelsControllers/AnimaisController')
const PartoController = require('./ModelsControllers/PartoController')
const InseminacaoController = require('./ModelsControllers/InseminacoesControllers')
const JWT = require('../services/auth-service')

function resHTTP(req, res, ControllerCadastrar) {
  JWT.authorizeProperty(req, res, async () => {
    const response = await ControllerCadastrar.store(req)
    return response ? res.status(201).send(response) : res.status(400).send({ message: 'Problemas ao cadastrar.' })
  })
}

module.exports = {
  async cadastrarAnimal(req, res) {
    resHTTP(req, res, AnimalController)
  },

  async cadastrarPartos(req, res) {
    resHTTP(req, res, PartoController)
  },

  async cadastrarInseminacao(req, res) {
    resHTTP(req, res, InseminacaoController)
  }
}
