const Usuario = require('../models/Usuario');
const decoder = require('../services/auth-service');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const JWT = require('../services/auth-service');

module.exports = {
    async retornarTecnicos(req, res) {
        JWT.authorize(req, res, async tokenDecodificado => {
            try {
                const response = await Usuario.findAll({
                    attributes: ['id', 'nome', 'email', 'cidade', 'telefone'],
                    where: {
                        tipo_usuario: 'tecnico',
                        [Op.not]: [{id: tokenDecodificado.id}]
                    },
                    include: {
                        association: 'tecnico',
                        attributes: ['ano_formatura', 'tipo_registro', 'registro_profissional'],
                    },
                });
                return res.status(200).send(response);
            } catch (e) {
                console.log(e);
                return res.status(200).send({ message: 'Problema no carregamento' });
            }
        });
    }
}

