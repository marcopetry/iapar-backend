const Usuario = require('../models/Usuario');
const validatorCadastro = require('../validators/cadastro/validators-cadastro');
const enviarEmail = require('../services/email-service');
const Builder = require('./BuilderUser/BuilderUser');
const { generateToken, decodeToken, verificaToken } = require('../services/auth-service');

module.exports = {
  async index(req, res) {
    const users = await Usuario.findAll();

    return res.json(users);
  },

  async buscarUsuario( email ) {
    const user = await Usuario.findOne({ where: { email } });
    return res.json(user);
  },

  async logar(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;
    const user = await Usuario.findOne({ where: { email, senha } });

    //aqui precisa ser conferido o tipo do usuário
    if (!user) {

    }
    return res.json(user);
  },

  async cadastrarUsuario(req, res) {
    const {
      nome, email, senha, cpf, cidade,
      rua, numero, bairro, cep, telefone, tipo_usuario
    } = req.body;

    //validar se usuário já existe, email ou cpf
    //retorna true se não existir usuário e retorna uma string caso tenha e o campo que já tem.
    const errors = await validatorCadastro.verificaBaseDados(email, cpf);
    if (errors === true) {
      const user = await Usuario.create({
        nome, email, senha, cpf, cidade,
        rua, numero, bairro, cep, telefone, 
        tipo_usuario, token: 'false'
      });

      //gera token para validar cadastro
      const token = await generateToken({ email, tipo_usuario });

      //enviar email de confirmação passa email do cadastrado + token para validar
      enviarEmail.send('marcomattospetry@gmail.com', token);
      const tecnico = await Builder.construirTipoUsuario(req.body, user.id);
      
      return tecnico ? res.json({resposta: 'Cadastro realizado com sucesso.'}) : res.json({resposta: 'Tente novamente.'})
    } 
    else {
      return res.json({resposta: errors});
    }
  }, 

  async validarUsuario(req, res, next){
    const token = req.params.token;
    let tokenDecodificado;

    //console.log(await verificaToken(token));
    try {
      tokenDecodificado = await decodeToken(token);
    } catch(e){
      return res.json({ erro: 'Token inválido' })
    }
    
    //valida o usuario no banco a partir do desparo do email verificado
    const [, resposta ] = await Usuario.update({token: 'true'}, {returning: true, where: {email: tokenDecodificado.email} });
    return res.json(resposta[0]);
  },

  async reenviarTokenValidacao(req, res){
    const { email } = req.body;

    const user = await Usuario.findOne({ where: { email } });

    if(user){
      const token = await generateToken({ email, tipo_usuario: user.tipo_usuario });
      enviarEmail.send('marcomattospetry@gmail.com', token);
      return res.json({ message: 'Token reenviado. Acesse seu email para confirmar.'});
    } else {
      return res.json({ message: 'Usuário não encontrado. Digite novamente o email ou faça o cadastro.'});
    }

  }
};