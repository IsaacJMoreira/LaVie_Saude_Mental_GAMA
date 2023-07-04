import errors from '../core/errors/errors.js';

const Psicologos = require ("../controllers/controllerPsicologos.js");

const login = async (req, res, next) => {
  const { email, senha } = req.body;

  const user = await Psicologos.findOne({
    where: {
      email: email,
      senha: senha,
    },
  });

  if (!user) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  req.usuarioAutenticado = user;

  next();
};

module.exports = login