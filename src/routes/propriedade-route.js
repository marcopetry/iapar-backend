const express = require('express');
const routes = express.Router();

const PropriedadeController = require('../controllers/propriedade-controller');

routes.post('/propriedade', PropriedadeController.cadastrarPropriedade);

module.exports = routes;