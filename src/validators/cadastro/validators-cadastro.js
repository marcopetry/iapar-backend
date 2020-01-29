const Usuario = require('../../models/Usuario');

module.exports ={
    async verificaBaseDados(email, cpf){
        let user;
        //falta validar crea e crmv
        user = await Usuario.findOne({ where: { email } });
        if(user){
            return 'Email já cadastrado.';
        }

        user = await Usuario.findOne({ where: { cpf } });
        if(user){
            return 'CPF já cadastrado.';
        }

        return true;
    }
}
 