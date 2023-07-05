
const { validate, Joi } = require("express-validation");
const Psicologos = require ("../controllers/controllerPsicologos.js");

const validation = validate({
  body: Joi.object({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).max(30).required(), 
      apresentacao: Joi.string().min(50).max(1000).required()
    })
  })

const middewaresPsicologos = {
  postPsicologo: async (req, res, next) => { 
    await validation(req, res, next);  
  },
  };
    
  module.exports = middewaresPsicologos;