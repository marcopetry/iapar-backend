const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/users-controllers');

routes.get('/user', UserController.index);
routes.post('/user', UserController.cadastrarUsuario);
routes.post('/auth', UserController.validarUsuario);

module.exports = routes;