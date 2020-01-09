const Usuario = require('../../models/Usuario');

module.exports ={
    async verificaBaseDados(email, cpf){
        let errors = [];
        let user;
        //falta validar crea e crmv
        user = await Usuario.findOne({ where: { email } });
        if(user){
            errors.push('Email já cadastrado.');
        }
        user = await Usuario.findOne({ where: { cpf } });
        if(user){
            errors.push('CPF já cadastrado.')
        }
        return errors;
    }
}
 