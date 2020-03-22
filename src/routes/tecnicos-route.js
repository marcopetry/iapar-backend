const express = require('express')
const routes = express.Router()

const TecnicoController = require('../controllers/tecnicos-controllers')

routes.get('/tecnicos', TecnicoController.retornarTecnicos)

module.exports = routes
