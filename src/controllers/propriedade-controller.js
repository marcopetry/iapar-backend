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
        try {
          const idPropriedadesTecnico = await PropriedadeTecnico.findAll({
            where: {
              id_tecnico: tokenDecodificado.id
            }
            //attributes: ['id_propriedade', 'id']
          })

          let ids = []
          idPropriedadesTecnico.forEach(element => {
            ids.push({
              id: element.id,
              id_propriedade: element.id_propriedade
            })
          })
          let propriedades = []
          const promisses = ids.map(async id => {
            const response = await Propriedade.findOne({
              attributes: ['id', 'nome_propriedade', 'data_proxima_visita'],
              where: {
                id: id.id_propriedade
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
                  through: 'propriedade_tecnicos'
                  include: {
                    association: 'usuarios'
                  }
                } */
              ]
            })
            const { usuario } = ({ dono_propriedade } = response.dono_propriedade)
            propriedades.push({
              id_propriedade_tecnico: id.id,
              id: response.id,
              nome_propriedade: response.nome_propriedade,
              data_proxima_visita: converterStringEmData.formataDataEmString(response.data_proxima_visita), //formatarData(propriedade.data_proxima_visita),
              nome_proprietario: usuario.nome,
              email: usuario.email,
              telefone: usuario.telefone,
              cidade: usuario.cidade
            })
          })

          await Promise.all(promisses)
          if (!propriedades) return res.status(200).send({ message: 'Problemas no carregamento.' })
          return res.status(200).send(propriedades)
        } catch (error) {
          console.log(error)
          res.status(400).send({ message: 'Falha ao carregar propriedades.' })
        }
      }

      if (tokenDecodificado.tipo_usuario === 'proprietario') {
        try {
          const response = await Propriedade.findAll({
            attributes: ['id', 'nome_propriedade', 'data_proxima_visita'],
            where: {
              id_proprietario: tokenDecodificado.id
            }
          })

          if (!response) {
            return res.status(200).send({ message: 'Problemas no carregamento.' })
          } else {
            let responseFormatada = []
            response.forEach(element => {
              responseFormatada.push({
                id: element.id,
                nome_propriedade: element.nome_propriedade,
                data_proxima_visita: converterStringEmData.formataDataEmString(element.data_proxima_visita)
              })
            })
            return res.status(200).send(responseFormatada)
          }
        } catch (error) {
          console.log(error)
          res.status(400).send({ message: 'Falha ao carregar propriedades.' })
        }
      }

      if (tokenDecodificado.tipo_usuario === 'admin') {
        try {
          const response = await Propriedade.findAll({
            attributes: ['id', 'nome_propriedade', 'data_proxima_visita'],
            include: [
              {
                association: 'dono_propriedade',
                attributes: ['cnpj'],
                include: {
                  association: 'usuario',
                  attributes: ['nome', 'email', 'telefone', 'cidade']
                }
              }
            ]
          })
          let propriedades = []
          response.forEach(element => {
            const { usuario } = ({ dono_propriedade } = element.dono_propriedade)
            propriedades.push({
              id: element.id,
              nome_propriedade: element.nome_propriedade,
              data_proxima_visita: converterStringEmData.formataDataEmString(element.data_proxima_visita), //formatarData(propriedade.data_proxima_visita),
              nome_proprietario: usuario.nome,
              email: usuario.email,
              telefone: usuario.telefone,
              cidade: usuario.cidade
            })
          })

          if (!propriedades) return res.status(200).send({ message: 'Problemas no carregamento.' })
          return res.status(200).send(propriedades)
        } catch (error) {
          console.log(error)
          return res.status(400).send({ message: 'Falha ao carregar propriedades.' })
        }
      }
      return res.status(404)
    })
  }
}
