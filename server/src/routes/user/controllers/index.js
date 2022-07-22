const {
  authentication,
  register,
  getUsers,
  confirmarCuenta,
  salir,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} = require("./user.controller");
const { registergoogleAuth } = require("./user.google.controller");

module.exports = {
  authentication,
  register,
  getUsers,
  confirmarCuenta,
  salir,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  registergoogleAuth,
};
