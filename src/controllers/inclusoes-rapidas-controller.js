const AnimalController = require('./ModelsControllers/AnimaisControllers')
const PartoController = require('./ModelsControllers/PartosControllers')
const InseminacaoController = require('./ModelsControllers/InseminacoesControllers')
const PrenhezController = require('./ModelsControllers/PrenhezControllers')
const MastiteController = require('./ModelsControllers/MastitesControllers')
const CompraAnimalController = require('./ModelsControllers/ComprasAnimaisControllers')
const VendaAnimalController = require('./ModelsControllers/VendasAnimaisControllers')
const MortesAnimalController = require('./ModelsControllers/MortesControllers')
const DoencasController = require('./ModelsControllers/DoencasControllers')
const TratamentoController = require('./ModelsControllers/TratamentosControllers')

const JWT = require('../services/auth-service')

function resHTTP(req, res, ControllerCadastrar, executeFuncion) {
  JWT.authorizeProperty(req, res, async () => {
    executeFuncion()
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
  },

  async cadastrarPrenhez(req, res) {
    resHTTP(req, res, PrenhezController)
  },

  async cadastrarMastite(req, res) {
    resHTTP(req, res, MastiteController)
  },

  async cadastrarCompraAnimal(req, res) {
    const cadastroAnimal = await AnimalController.store(req)
    if (!cadastroAnimal) {
      return res.status(500).send({ message: 'Problemas ao cadastrar.' })
    }
    const newDates = {
      ...req,
      body: {
        ...req.body,
        id_animal: cadastroAnimal.id
      }
    }
    resHTTP(newDates, res, CompraAnimalController)
  },

  async cadastrarVendaAnimal(req, res) {
    const execute = async () => {
      const { id_animal } = req.body
      const updateAnimal = await AnimalController.update(id_animal, { status: 'Vendido' })
      if (!updateAnimal) {
        return res.status(400).send({ message: 'Problemas ao cadastrar.' })
      }
    }
    resHTTP(req, res, VendaAnimalController, execute)
  },

  async cadastrarMorteAnimal(req, res) {
    const execute = async () => {
      const { id_animal } = req.body
      const updateAnimal = await AnimalController.update(id_animal, { status: 'Morto' })
      if (!updateAnimal) {
        return res.status(400).send({ message: 'Problemas ao cadastrar.' })
      }
    }
    resHTTP(req, res, MortesAnimalController, execute)
  },

  async cadastrarDoenca(req, res) {
    const execute = async () => {
      const { id_animal } = req.body
      const updateAnimal = await AnimalController.update(id_animal, { status: 'Doente' })
      if (!updateAnimal) {
        return res.status(400).send({ message: 'Problemas ao cadastrar.' })
      }
    }
    resHTTP(req, res, DoencasController, execute)
  },

  async cadastrarTratamento(req, res) {
    const execute = async () => {
      const { id_animal } = req.body
      const updateAnimal = await AnimalController.update(id_animal, { status: 'Tratamento' })
      if (!updateAnimal) {
        return res.status(400).send({ message: 'Problemas ao cadastrar.' })
      }
    }
    resHTTP(req, res, TratamentoController, execute)
  }
}
