const { Router } = require("express");
const { Producto, Rating } = require("../db.js");
const router = Router()


router.post('/:productId', async (req, res) => {
    const {productId} = req.params
    const {puntaje, titulo, comentario} = req.body

    //Parseo el id
    const parsedId = parseInt(productId)

    //Si no me pasan un número, error.
    if(!parsedId) return res.status(400).send({Error: 'El id debe ser un número.'})
    

    //Si no me traen lo requerido o el puntaje no es un número o si el número no es entre 1 y 5, devuelvo un error.
    if(!puntaje || puntaje < 1 || puntaje > 5 || !titulo || !comentario) return res.status(400).send({Error: 'Faltan datos. El puntaje debe ser un número del 1 al 5.'})

    //Busco el producto segun el id que me pasen
    const producto = await Producto.findByPk(parsedId)

    //Le creo una review a ese producto
    const review = await producto.createRating({
        puntaje: puntaje,
        titulo: titulo,
        comentario: comentario
    })

    //Mando la review hecha
    res.send(review)


})


module.exports = router