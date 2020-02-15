const Tecnico = require('../../models/Tecnico');
const Proprietario = require('../../models/Proprietario');

module.exports = {

    async construirTipoUsuario(bodyReq, id) {
        switch (bodyReq.tipo_usuario) {
            case 'tecnico':
                const { ano_formatura, tipo_registro, registro_profissional } = bodyReq;
                const tecnico = await Tecnico.create({
                    id, ano_formatura, tipo_registro, registro_profissional
                });
                return tecnico;
            case 'proprietario':
                const { cnpj } = bodyReq;
                const proprietario = await Proprietario.create({id, cnpj});
                return proprietario;
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }

    }
}