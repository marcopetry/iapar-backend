const express = require('express')
const routes = express.Router()

const UserController = require('../controllers/users-controllers')

routes.post('/user', UserController.cadastrarUsuario)
routes.post('/auth', UserController.reenviarTokenValidacao)
routes.post('/login', UserController.logar)
routes.get('/user/:token', UserController.retornarUsuario)
routes.get('/auth/:token', UserController.validarUsuario)

module.exports = routes
