const Usuario = require('../models/Usuario')
const Propriedade = require('../models/Propriedade')
const Proprietario = require('../models/Proprietario')
const Tecnico = require('../models/Tecnico')
const PropriedadeTecnico = require('../models/PropriedadeTecnico')
const converterStringEmData = require('../utils/conversorStringData')
const UtilPropriedadeTecnico = require('../utils/retornarIDPropriedadeTecnico')
const JWT = require('../services/auth-service')
const InfoPropriedade = require('../models/InfoPropriedade')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  /*
        Cadastra a propriedade, os técnicos responsáveis e retorna sucesso e o id da tabela
        n:m entre propriedade e técnico para fazer o inventário.
    */
  async cadastrarPropriedade(req, res) {
    JWT.authorize(req, res, async tokenDecodificado => {
      const {
        id_proprietario,
        nome_propriedade,
        longitude,
        latitude,
        data_inicio_programa,
        data_proxima_visita,
        id_tecnicos
      } = req.body

      const propriedade = await Propriedade.create({
        id_proprietario,
        nome_propriedade,
        longitude,
        latitude,
        data_inicio_programa: converterStringEmData.formataStringEmData(data_inicio_programa),
        data_proxima_visita: converterStringEmData.formataStringEmData(data_proxima_visita)
      })

      try {
        //informações da pessoa que cadastrou
        id_tecnicos.unshift(tokenDecodificado.id)
        const promisses = id_tecnicos.map(async id => {
          const tecnico = await Tecnico.findByPk(id)
          await tecnico.addPropriedade(propriedade, { through: { id_propriedade: propriedade.id } })
        })
        await Promise.all(promisses)

        //pegar id da tabela n:m com a propriedade e o técnico que está inserindo os dados
        const id_propriedade_tecnico = await UtilPropriedadeTecnico.retornarIDPropriedadeTecnico(
          tokenDecodificado.id,
          propriedade.id
        )
        return res
          .status(200)
          .send({ message: 'Propriedade cadastrada com sucesso.', id_propriedade_tecnico: id_propriedade_tecnico.id })
      } catch (e) {
        console.log(e)
        return res.status(200).send({ message: 'Problemas ao cadastrar propriedade.' })
      }
    })
  },

  async cadastrarInfoPropriedade(req, res) {
    JWT.authorize(req, res, async tokenDecodificado => {
      const {
        id_propriedade_tecnico,
        data_insercao,
        area_total,
        total_terra_arrendada,
        area_bovinucultura,
        area_pasto_perene,
        area_lavoura_verao,
        area_lavoura_inverno,
        preco_medio_terra_nua,
        preco_medio_arrendamento,
        qtd_pessoas_envolvidas_atividade
        //mapa_uso_solo: DataTypes.BLOB
      } = req.body

      try {
        const info_propriedade = await InfoPropriedade.create({
          id_propriedade_tecnico,
          data_insercao: converterStringEmData.formataStringEmData(data_insercao),
          area_total,
          total_terra_arrendada,
          area_bovinucultura,
          area_pasto_perene,
          area_lavoura_verao,
          area_lavoura_inverno,
          preco_medio_terra_nua,
          preco_medio_arrendamento,
          qtd_pessoas_envolvidas_atividade
          //mapa_uso_solo: DataTypes.BLOB
        })
        return res.status(200).send({ info_propriedade })
      } catch (e) {
        console.log(e)
        return res.status(200).send({ message: 'Problemas ao cadastrar propriedade.' })
      }
    })
  },

  async buscarInformcacoesPropriedade(req, res) {
    JWT.authorize(req, res, async tokenDecodificado => {
      const id = req.params.id_propriedade_tecnico
      const dadosPropriedade = await InfoPropriedade.findByPk(id)
      if (dadosPropriedade) {
        res.status(200).send({ dadosPropriedade: dadosPropriedade.dataValues })
      } else {
        res.status(200).send({ message: 'Problemas ao buscar dados.' })
      }
    })
  },

  async buscarTodasPropriedadesSobSuaResponsabilidade(req, res) {
    JWT.authorize(req, res, async tokenDecodificado => {
      if (tokenDecodificado.tipo_usuario === 'tecnico') {
        const idPropriedadesTecnico = await PropriedadeTecnico.findAll({
          where: {
            id_tecnico: tokenDecodificado.id
          },
          attributes: ['id_propriedade']
        })
        let ids = []
        idPropriedadesTecnico.map(id => ids.push(id.id_propriedade))
        //console.log(ids)
        //return res.send({ ids })
        let propriedades = []
        const promisses = ids.map(async id => {
          const response = await Propriedade.findAll({
            attributes: ['id', 'nome_propriedade', 'data_proxima_visita'],
            where: {
              id
            },
            include: [
              {
                association: 'dono_propriedade',
                attributes: ['cnpj'],
                include: {
                  association: 'usuario',
                  attributes: ['nome', 'email', 'telefone', 'cidade']
                }
              }
              /* {
                association: 'tecnicos',
                through: 'propriedade_tecnicos',
                include: {
                  association: 'usuarios'
                }
              } */
            ]
          })
          propriedades.push(response)
        })
        await Promise.all(promisses)
        if (!propriedades) return res.status(200).send({ message: 'Problemas no carregamento.' })
        return res.status(200).send(propriedades)
      }
      /* 
      if (tokenDecodificado.tipo_usuario === 'proprietario') {
        const response = await Propriedade.findAll({
          attributes: [
            'id',
            'id_proprietario',
            'nome_propriedade',
            'longitude',
            'latitude',
            'data_inicio_programa',
            'data_proxima_visita'
          ],
          where: {}
        })

        if (!response) return res.status(200).send({ message: 'Problemas no carregamento.' })
        return res.status(200).send(promisses)
      } */
    })
  }
}
