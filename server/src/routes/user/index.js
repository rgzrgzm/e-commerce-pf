const { Router } = require("express");

const { Usuario } = require("../../db");

const router = Router();

const {
  register,
  authentication,
  registergoogleAuth,
  confirmarCuenta,
  salir,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  getUsers,
} = require("./controllers");

router.post("/register", register);
router.post("/login", authentication);
router.post("/register-google", registergoogleAuth);
router.get("/confirmar/:token", confirmarCuenta);
router.post("/salir", salir);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);
router.get("/", getUsers);

router.get("/profile/:id", async (req, res) => {
  let { id } = req.params;

  //Busco el usuario por id
  const foundUser = await Usuario.findByPk(id);

  //Si no encuentro nada mando un 404
  if (!foundUser)
    return res.status(404).send({ Error: "Usuario no encontrado." });
  //console.log(foundUser);

  //Mando solo la info que no sea sensible
  const userPublicData = {
    id: foundUser.id,
    nombre: foundUser.nombre,
    apellido: foundUser.apellido,
    email: foundUser.mail,
    telefono: foundUser.telefono,
    //Formateo la fecha
    // creado: foundUser.createdAt.toLocaleTimeString("es", {
    //   weekday: "long",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // }),
  };

  return res.send(userPublicData);
});

router.put("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await Usuario.findByPk(id);
    const response = await user.update(body);
    res.json(response);
  } catch (error) {
    throw new Error({ msg: error });
  }
});

module.exports = router;
