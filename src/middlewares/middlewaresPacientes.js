//VAI, DIEGO

const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
  if(error instanceof ValidationError){
    return res.status(error.statusCode).json(error);
  }

  return res.status(500).json(error);
};










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

