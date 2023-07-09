//VAI QUE É TUA, YOSEF
const { validate, Joi } = require("express-validation");


const validatePost = validate({
  body: Joi.object({
      id_paciente: Joi.number().integer().required(),
      atendimento: Joi.date().iso().required(), 
      OBS: Joi.string().min(50).max(1000).required()
    })
  });


const middlewaresAtendimentos = {
  postAtendimento: async (req, res, next) => { 
    await validatePost(req, res, next);  
  }
};

  module.exports = middlewaresAtendimentos;

