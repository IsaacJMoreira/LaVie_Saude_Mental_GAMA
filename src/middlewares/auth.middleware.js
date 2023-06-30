import { verifyToken } from "../core/utils/verify-token.util.js";

export const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'usuário inválido' })
  };

  const verify = verifyToken(authorization)

  if (verify) {
    req.user = verify;

    next()
  } else {
    return res.status(401).json({ message: 'token inválido' })
  }
    

  next();
}