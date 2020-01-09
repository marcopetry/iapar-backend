const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/users-controllers');


routes.get('/', UserController.index);
routes.post('/user', UserController.cadastrarUsuario);
routes.get('/user', UserController.buscarUsuario);
routes.get('/auth', UserController.logar);

module.exports = routes;