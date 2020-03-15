const Forragen = require('../models/Forragem')
const JWT = require('../services/auth-service')

module.exports = {
  async cadastrarForragem(req, res) {
    JWT.authorize(req, res, async () => {
      const { nome_forragem, tipo_forragem } = req.body
      console.log(nome_forragem)
      const forragem = await Forragen.create({
        nome_forragem,
        tipo_forragem
      })

      forragem ? res.status(200).send(forragem) : res.status(200).send({ message: 'Problema ao cadastrar forragem.' })
    })
  }
}
