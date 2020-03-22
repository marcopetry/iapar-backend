'use strict'
const jwt = require('jsonwebtoken')
const util = require('../validators/verificaUsuarioTemAcessoPropriedade')

exports.generateToken = async data => {
  return await jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' })
}

exports.decodeToken = async token => {
  var data = await jwt.verify(token, global.SALT_KEY)
  return data
}

exports.verificaToken = async function(token) {
  if (!token) {
    return 'Acesso Restrito'
  } else {
    jwt.verify(token, global.SALT_KEY, function(error, decoded) {
      return error ? 'Token Inválido' : decoded
    })
  }
}

exports.authorize = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.params.token

  if (!token) {
    res.status(401).send({
      message: 'Acesso Restrito'
    })
  } else {
    jwt.verify(token, global.SALT_KEY, function(error, decoded) {
      if (error) {
        res.status(401).send({
          message: 'Token Inválido'
        })
      } else {
        next(decoded)
      }
    })
  }
}

exports.authorizeProperty = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.params.token

  if (!token) {
    res.status(401).send({
      message: 'Acesso Restrito'
    })
  } else {
    jwt.verify(token, global.SALT_KEY, function(error, decoded) {
      if (error) {
        res.status(401).send({
          message: 'Token Inválido'
        })
      } else {
        const id_propriedade = req.params.id_propriedade
        const authorize = util.verificaUsuarioTemAcessoPropriedade(decoded, id_propriedade)
        authorize ? next(decoded) : res.status(401).send({ message: 'Você não pode editar nessa propriedade' })
      }
    })
  }
}

exports.isAdmin = function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.status(401).json({
      message: 'Token Inválido'
    })
  } else {
    jwt.verify(token, global.SALT_KEY, function(error, decoded) {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido'
        })
      } else {
        if (decoded.roles.includes('admin')) {
          next()
        } else {
          res.status(403).json({
            message: 'Esta funcionalidade é restrita para administradores'
          })
        }
      }
    })
  }
}
