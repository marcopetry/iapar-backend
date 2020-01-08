const Usuario = require('../models/Usuario');

module.exports = {
  async index(req, res) {
    const users = await Usuario.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const {
      nome, email, senha, cpf, cidade, 
      rua, numero, bairro, cep, telefone
    } = req.body;

    const user = await Usuario.create({
      nome, email, senha, cpf, cidade, 
      rua, numero, bairro, cep, telefone 
     });

    return res.json(user);
  }
};