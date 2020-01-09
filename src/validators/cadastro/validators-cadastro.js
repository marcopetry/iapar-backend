const Usuario = require('../../models/Usuario');

module.exports ={
    async verificaBaseDados(req){
        const {
            nome, email, senha, cpf, cidade, 
            rua, numero, bairro, cep, telefone
        } = req;
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
 