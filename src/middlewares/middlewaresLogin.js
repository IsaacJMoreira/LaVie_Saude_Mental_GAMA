const { validate, Joi } = require("express-validation");


const validateLogin = validate({
  body: Joi.object({
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).max(30).required(), 
    })
});

  const middlewaresLogin = {
    postLogin: async (req, res, next) => { 
      await validateLogin(req, res, next);  
    }
};

  module.exports = middlewaresLogin;
