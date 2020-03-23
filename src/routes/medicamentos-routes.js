const express = require('express')
const routes = express.Router()

const MedicamentoController = require('../controllers/ModelsControllers/MedicamentosControllers')

routes.post('/medicamento', MedicamentoController.store)
routes.get('/medicamento', MedicamentoController.index)

module.exports = routes
