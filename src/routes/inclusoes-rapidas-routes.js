const express = require('express')
const routes = express.Router()

const InclusoesRapidasController = require('../controllers/inclusoes-rapidas-controller')

routes.post('/animal/:id_propriedade/novo', InclusoesRapidasController.cadastrarAnimal)
routes.post('/parto/:id_propriedade/novo', InclusoesRapidasController.cadastrarPartos)
routes.post('/inseminacao/:id_propriedade/novo', InclusoesRapidasController.cadastrarInseminacao)
//prenhez
routes.post('/mastite/:id_propriedade/novo', InclusoesRapidasController.cadastrarMastite)

module.exports = routes
