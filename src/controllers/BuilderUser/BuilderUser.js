const Usuario = require('../../models/Usuario');
const Tecnico = require('../../models/Tecnico');
const Proprietario = require('../../models/Proprietario');

module.exports = {

    async construirTipoUsuario(bodyReq, id) {
        switch (bodyReq.tipo_usuario) {
            case 'tecnico':
                const { ano_formatura, tipo_registro, registro_profissional } = bodyReq;
                try {
                    const tecnico = await Tecnico.create({
                        id, ano_formatura, tipo_registro, registro_profissional
                    });
                    //Tecnico.associate(Usuario);
                    return tecnico;
                } catch (e) {
                    console.log(e);
                    await Usuario.destroy({ where: {id}});
                    return "Problemas ao cadastrar.";
                }
            case 'proprietario':
                const { cnpj } = bodyReq;
                try {
                    const proprietario = await Proprietario.create({id, cnpj});
                    return proprietario;
                } catch (e) {
                    console.log(e);
                    await Usuario.destroy({ where: {id}});
                    return "Problemas ao cadastrar.";
                }
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }

    }
}