const ControllerTecnico = require('./ConcreteBuilders/controller-tecnico');

module.exports = {

    async construirTipoUsuario(bodyReq, id) {
        let res;
        switch (bodyReq.tipo_usuario) {
            case 'tecnico':
                return ControllerTecnico.cadastrarTecnico(bodyReq, id);
            default:
                console.log('Sorry, we are out of ' + expr + '.');
        }

    }
}