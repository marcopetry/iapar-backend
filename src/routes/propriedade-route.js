const express = require('express');
const routes = express.Router();

const PropriedadeController = require('../controllers/propriedade-controller');

routes.post('/propriedade', PropriedadeController.cadastrarPropriedade);
routes.post('/info-propriedade', PropriedadeController.cadastrarInfoPropriedade);

module.exports = routes;