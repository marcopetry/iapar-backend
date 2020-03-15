const express = require('express')
const routes = express.Router()

const InventarioController = require('../controllers/inventario-controller')

routes.post('/forragem', InventarioController.cadastrarForragem)

module.exports = routes
