const Propriedade = require('../models/Propriedade');
const Tecnico = require('../models/Tecnico');
const converterStringEmData  = require('../utils/conversorStringData');

module.exports = {
    async cadastrarPropriedade(req, res, next){
        const { id_proprietario, 
            nome_propriedade, 
            longitude, 
            latitude, 
            qtd_pessoas_envolvidas_atividade, 
            data_inicio_programa, 
            data_proxima_visita, 
            id_tecnicos 
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

        const tecnico = await Tecnico.findByPk(id_tecnicos);
        await tecnico.addPropriedade(propriedade, { through: { id_propriedade: propriedade.id }});
        //await tecnico.addPropriedade(response);
        return res.status(200).send(tecnico)

        // return response ? 
        //     res.status(200).send({ id_propriedade: response.id }) : 
        //     res.status(200).send({ message: 'Problemas ao cadastrar propriedade.'});
        
    },
}
