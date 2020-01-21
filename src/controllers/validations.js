const { generateToken, decodeToken } = require('../services/auth-service');


module.exports = {
     async cadastrarToken(req, res, next){
         const { nome, email } = req.body;
         const token = await generateToken({nome, email});
         const tokenDecodificado = await decodeToken(token);
         return res.json(tokenDecodificado);
     }
}