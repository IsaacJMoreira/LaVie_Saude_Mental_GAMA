//VAI QUE É TUA, YOSEF
const { validate, Joi } = require("express-validation");
const Atendimentos = require ("../controllers/controllerAtendimentos.js");

const validatePost = validate({
  body: Joi.object({
      paciente_id: Joi.number().integer().required(),
      data_atendimento: Joi.date().iso().required(), 
      observacao: Joi.string().min(50).max(1000).required()
    })
  })

  
//const validatePut = validate({
  //body: Joi.object({
    //paciente_id: Joi.number().integer().required(),
    //data_atendimento: Joi.date().iso().required(), 
    //observacao: Joi.string().min(50).max(1000).required()
    //})
  //})

const middlewaresAtendimentos = {
  postAtendimento: async (req, res, next) => { 
    await validatePost(req, res, next);  
  },
  //getAtendimentoById: async (req, res, next) => { 
    //await validatePut(req, res, next);  
  //},
  };

  module.exports = middlewaresAtendimentos;


/*import errors from '../core/errors/errors.js';

export const validate = (req, res, next) => {
  const { body: { name, email } } = req;

  if (!name || !email) {
    return res.status(400).json({ message: errors.EMAIL_OR_NAME_EMPTY })
  }

  if (name.length > 50)  {
    return res.status(400).json({ message: errors.NAME_LIMIT_CHARACTER })
  }

  next();
}*/