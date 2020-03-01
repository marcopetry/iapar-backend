const PropriedadeTecnico = require('../models/PropriedadeTecnico');

exports.retornarIDPropriedadeTecnico = async (id_tecnico, id_propriedade) => {
    const id = await PropriedadeTecnico.findOne({
        where: { id_tecnico, id_propriedade},
        attributes: ['id']
    });
    return id;
}

exports.retornarPropriedadeTecnico = async id => {
    const propriedadeTecnico = await PropriedadeTecnico.findByPk(id);
    //console.log(propriedadeTecnico);
    return propriedadeTecnico.dataValues;
}