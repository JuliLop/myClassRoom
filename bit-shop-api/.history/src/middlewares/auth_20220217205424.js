const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers["Authorization"];

    if (!token) throw "No puedes ingresar sin un token!"

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

    req.pato = decoded

    return next()

  } catch (error) {
      res.status(401).json({err})
  }
};

module.exports = verifyToken;