const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Tecnico = require('../models/Tecnico');
const Proprietario = require('../models/Proprietario');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Tecnico.init(connection);
Proprietario.init(connection);

module.exports = connection;