const Medicamento = require('../../models/Medicamento')
const JWT = require('../../services/auth-service')

module.exports = {
  async store(req, res) {
    JWT.authorize(req, res, async () => {
      const { principio_ativo, nome, forma_aplicacao } = req.body

      try {
        const response = await Medicamento.create({
          principio_ativo,
          nome,
          forma_aplicacao
        })
        response
          ? res.status(201).send({ message: 'Cadastrado com sucesso.', response })
          : res.status(200).send({ message: 'Problemas ao cadastrar.' })
      } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Problema no servidor.' })
      }
    })
  },

  async index(req, res) {
    JWT.authorize(req, res, async () => {
      try {
        const response = await Medicamento.findAll()
        return res.status(200).send(response)
      } catch (e) {
        res.status(500).send({ message: 'Problema no servivor.' })
      }
    })
  }
}
