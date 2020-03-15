const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Usuario = require('../models/Usuario')
const Tecnico = require('../models/Tecnico')
const Proprietario = require('../models/Proprietario')
const Propriedade = require('../models/Propriedade')
const PropriedadeTecnico = require('../models/PropriedadeTecnico')
const InfoPropriedade = require('../models/InfoPropriedade')
const Folhagem = require('../models/Forragem')
const TerraForragem = require('../models/TerraForragem')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Tecnico.init(connection)
Proprietario.init(connection)
Propriedade.init(connection)
PropriedadeTecnico.init(connection)
InfoPropriedade.init(connection)
Folhagem.init(connection)
TerraForragem.init(connection)

Usuario.associate(connection.models)
Tecnico.associate(connection.models)
Proprietario.associate(connection.models)
Propriedade.associate(connection.models)
PropriedadeTecnico.associate(connection.models)
InfoPropriedade.associate(connection.models)
TerraForragem.associate(connection.models)

module.exports = connection
