const Usuario = require('../models/Usuario');
const Tecnico = require('../models/Tecnico');

module.exports = {
    async retornarTecnicos(req, res) {
        try {
            const response = await Usuario.findAll({
                attributes: ['id', 'nome', 'email', 'cidade', 'telefone'],
                where: {
                  tipo_usuario: 'tecnico'
                },
                    include: { association: 'tecnico', 
                    attributes: ['ano_formatura', 'tipo_registro', 'registro_profissional'],
                    },
                });                
                return res.status(200).send(response);
        } catch (e){
            console.log(e);
            return res.status(200).send({ message: 'Problema no carregamento' });
        }
      }
}

