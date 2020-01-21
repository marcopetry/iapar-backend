const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/users-controllers');
//const validations = require('../controllers/validations');


routes.get('/user', UserController.index);
routes.post('/user', UserController.cadastrarUsuario);
//routes.post('/validations', validations.cadastrarToken);
routes.get('/auth', UserController.logar);

module.exports = routes;