const express = require('express')
const routes = express.Router()

const PropriedadeController = require('../controllers/propriedade-controller')

routes.post('/propriedade', PropriedadeController.cadastrarPropriedade)
routes.post('/info-propriedade', PropriedadeController.cadastrarInfoPropriedade)
routes.get('/propriedade', PropriedadeController.buscarTodasPropriedadesSobSuaResponsabilidade)
routes.get('/info-propriedade/:id_propriedade_tecnico', PropriedadeController.buscarInformcacoesPropriedade)

module.exports = routes
