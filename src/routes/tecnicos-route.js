const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/users-controllers');
const TecnicoController = require('../controllers/tecnicos-controllers');

routes.get('/tecnicos', TecnicoController.retornarTecnicos);

module.exports = routes;