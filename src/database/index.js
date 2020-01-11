const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Tecnico = require('../models/Tecnico');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Tecnico.init(connection);

module.exports = connection;