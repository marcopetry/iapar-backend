const express = require('express')
const routes = express.Router()

const InclusoesRapidasController = require('../controllers/inclusoes-rapidas-controller')

routes.post('/animal/:id_propriedade/novo', InclusoesRapidasController.cadastrarAnimal)
routes.post('/parto/:id_propriedade/novo', InclusoesRapidasController.cadastrarPartos)
routes.post('/inseminacao/:id_propriedade/novo', InclusoesRapidasController.cadastrarInseminacao)
routes.post('/prenhez/:id_propriedade/novo', InclusoesRapidasController.cadastrarPrenhez)
routes.post('/mastite/:id_propriedade/novo', InclusoesRapidasController.cadastrarMastite)
routes.post('/compra/:id_propriedade/novo', InclusoesRapidasController.cadastrarCompraAnimal)
routes.post('/venda/:id_propriedade/novo', InclusoesRapidasController.cadastrarVendaAnimal)
routes.post('/morte/:id_propriedade/novo', InclusoesRapidasController.cadastrarMorteAnimal)
routes.post('/doenca/:id_propriedade/novo', InclusoesRapidasController.cadastrarDoenca)
routes.post('/tratamento/:id_propriedade/novo', InclusoesRapidasController.cadastrarTratamento)
routes.post('/medicamentos/novo', InclusoesRapidasController.cadastrarRemedio)

routes.get('/animal/:id_propriedade', InclusoesRapidasController.retornarAnimaisPropriedade)
routes.get('/medicamentos', InclusoesRapidasController.retornarRemedios)
routes.get('/inseminacao/ultima/:id_vaca', InclusoesRapidasController.retornarUltimaInseminacaoVaca)

module.exports = routes
