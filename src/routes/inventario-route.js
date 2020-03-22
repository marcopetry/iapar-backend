const express = require('express')
const routes = express.Router()

const InventarioController = require('../controllers/inventario-controller')

routes.post('/forragem', InventarioController.cadastrarForragem)
routes.post('/forragem/:id_info_propriedade', InventarioController.cadastrarTerraForragens)
routes.get('/forragem', InventarioController.retornarFerragensCadastradas)

module.exports = routes
