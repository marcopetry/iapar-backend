const Propriedade = require('../models/Propriedade')
const PropriedadeTecnico = require('../models/PropriedadeTecnico')

exports.verificaUsuarioTemAcessoPropriedade = async function(tokenDecodificado, idPropriedade) {
  switch (tokenDecodificado.tipo_usuario) {
    case 'proprietario': {
      try {
        const response = await Propriedade.findByPk(idPropriedade)
        return response && response.id_proprietario === tokenDecodificado.id
      } catch (error) {
        return false
      }
    }
    case 'tecnico': {
      try {
        const response = await PropriedadeTecnico.findOne({
          where: { id_propriedade: idPropriedade, id_tecnico: tokenDecodificado.id }
        })
        return !!response
      } catch (error) {
        console.log('erro tecnico', error)
        return false
      }
    }
    case 'admin': {
      return true
    }
    default:
      return false
  }
}
