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

        try {
            const promisses = id_tecnicos.map(async id => {
                    const tecnico = await Tecnico.findByPk(id);
                    await tecnico.addPropriedade(propriedade, { through: { id_propriedade: propriedade.id }});
                });
            await Promise.all(promisses);                
            return res.status(200).send({ message: 'Propriedade cadastrada com sucesso.' });
        } catch(e){
            console.log(e);
            return res.status(200).send({ message: 'Problemas ao cadastrar propriedade.'});
        }
    },
}
