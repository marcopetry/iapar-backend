const Propriedade = require('../models/Propriedade');
const converterStringEmData  = require('../utils/conversorStringData');

module.exports = {
    async cadastrarPropriedade(req, res, next){
        const { id_proprietario, nome_propriedade, longitude, latitude, 
            qtd_pessoas_envolvidas_atividade, data_inicio_programa, 
            data_proxima_visita } = req.body;
            const response = await Propriedade.create({
                id_proprietario, 
                nome_propriedade, 
                longitude, 
                latitude, 
                qtd_pessoas_envolvidas_atividade, 
                data_inicio_programa: converterStringEmData.formataStringEmData(data_inicio_programa),
                data_proxima_visita: converterStringEmData.formataStringEmData(data_proxima_visita)
            });
            return res.status(200).send(response);
    }
}