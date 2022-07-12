const { Router } = require("express");
const { Producto } = require("../db.js");
const router = Router();

router.get("/product/:productId", async (req, res) => {
  const { productId } = req.params;
  //Parseo el id
  const parsedId = parseInt(productId);

  //Si no me pasan un número, error.
  if (!parsedId && parsedId < 1)
    return res.status(400).send({ Error: "El id debe ser un número entero positivo mayor a 0." });

      //Busco las reviews del producto que me pasen.
    const producto = await Producto.findByPk(parsedId);
    
    if(!producto) return res.status(404).send({Error: "Producto no encontrado."})

    res.send(producto)
});

router.post("/:productId", async (req, res) => {
  const { productId } = req.params;
  const { puntaje, titulo, comentario } = req.body;

  //const userId = (userid pasado por cookies de alguna forma)
  // const user = await Usuarios.findByPk(userId)

  //Parseo el id
  const parsedId = parseInt(productId);

  //Si no me pasan un número, error.
  if (!parsedId && parsedId < 1)
    return res.status(400).send({ Error: "El id debe ser un número entero positivo mayor a 0." });

  //Si no me traen lo requerido o el puntaje no es un número o si el número no es entre 1 y 5, devuelvo un error.
  if (!puntaje || puntaje < 1 || puntaje > 5 || !titulo || !comentario)
    return res
      .status(400)
      .send({
        Error: "Faltan datos. El puntaje debe ser un número del 1 al 5.",
      });

  //Busco el producto segun el id que me pasen
  const producto = await Producto.findByPk(parsedId);

  //Le creo una review a ese producto
  const review = await producto.createRating({
    puntaje: puntaje,
    titulo: titulo,
    comentario: comentario,
  });

  //await User.addRating(review) para darle la review creada al user

  //Mando la review hecha
  res.send(review);
});

module.exports = router;
