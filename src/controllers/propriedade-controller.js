const Propriedade = require('../models/Propriedade');
const Tecnico = require('../models/Tecnico');
const converterStringEmData  = require('../utils/conversorStringData');
const PropriedadeTecnico = require('../models/PropriedadeTecnico');
const idPropriedadeTecnico = require('../utils/retornarIDPropriedadeTecnico');
const decodeToken = require('../services/auth-service');

module.exports = {
    /*
        Cadastra a propriedade, os técnicos responsáveis e retorna sucesso e o id da tabela
        n:m entre propriedade e técnico para fazer o inventário.
    */
    async cadastrarPropriedade(req, res, next){
        const { id_proprietario, 
            nome_propriedade, 
            longitude, 
            latitude, 
            qtd_pessoas_envolvidas_atividade, 
            data_inicio_programa, 
            data_proxima_visita, 
            id_tecnicos, 
            token 
        } = req.body;
        
        const propriedade = await Propriedade.create({
            id_proprietario, 
            nome_propriedade, 
            longitude, 
            latitude, 
            qtd_pessoas_envolvidas_atividade, 
            data_inicio_programa: converterStringEmData.formataStringEmData(data_inicio_programa),
            data_proxima_visita: converterStringEmData.formataStringEmData(data_proxima_visita)
        });

        try {
            //informações da pessoa que cadastrou
            const tokenDecodificado = await decodeToken.decodeToken(token);
            id_tecnicos.unshift(tokenDecodificado.id);
            const promisses = id_tecnicos.map(async id => {
                    const tecnico = await Tecnico.findByPk(id);
                    await tecnico.addPropriedade(propriedade, { through: { id_propriedade: propriedade.id }});
                });
            await Promise.all(promisses);

            //pegar id da tabela n:m com a propriedade e o técnico que está inserindo os dados
            const id_propriedade_tecnico = await idPropriedadeTecnico.retornarIDPropriedadeTecnico(tokenDecodificado.id, propriedade.id);
            return res.status(200).send({ message: 'Propriedade cadastrada com sucesso.', id_propriedade_tecnico });
        } catch(e){
            console.log(e);
            return res.status(200).send({ message: 'Problemas ao cadastrar propriedade.'});
        }
    },

}
