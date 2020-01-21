const Tecnico = require('../../../models/Tecnico');

module.exports = {
    async cadastrarTecnico(bodyReq, id_usuario){
        const { ano_formatura, tipo_registro, registro_profissional } = bodyReq;
        
        const tecnico = await Tecnico.create({
            id:id_usuario, ano_formatura, tipo_registro, registro_profissional
        });

        return tecnico;
    }
}