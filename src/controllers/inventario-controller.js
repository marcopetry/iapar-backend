const Forragen = require('../models/Forragem')
const TerraForragem = require('../models/TerraForragem')
const JWT = require('../services/auth-service')

module.exports = {
  async cadastrarForragem(req, res) {
    JWT.authorize(req, res, async () => {
      const { nome_forragem, tipo_forragem } = req.body
      const forragem = await Forragen.create({
        nome_forragem,
        tipo_forragem
      })

      forragem ? res.status(200).send(forragem) : res.status(200).send({ message: 'Problema ao cadastrar forragem.' })
    })
  },

  async cadastrarTerraForragens(req, res) {
    JWT.authorize(req, res, async () => {
      const id_info_propriedade = req.params.id_info_propriedade
      const { id_forragem, area, data_formacao, tipo_terra, observacao, custo_medio_formacao, vida_util } = req.body
      const terraForragem = await TerraForragem.create({
        id_info_propriedade,
        id_forragem,
        area,
        data_formacao,
        tipo_terra,
        observacao,
        custo_medio_formacao,
        vida_util
      })
      terraForragem ? res.status(200).send(terraForragem) : res.status(200).send({ message: 'Problema ao cadastrar' })
    })
  },

  async retornarFerragensCadastradas(req, res) {
    JWT.authorize(req, res, async () => {
      try {
        const response = await Forragen.findAll()
        response ? res.status(200).send(response) : res.status(200).send({ message: 'Problemas no carregamento.' })
      } catch (e) {
        console.log(e)
        response.status(200).send({ erro: e })
      }
    })
  }
}
