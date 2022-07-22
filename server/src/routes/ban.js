const { Router } = require("express");
const {Usuario} = require('../db')

const router = Router();

router.put("/:id", async (req, res) => {

    const {id} = req.params
    try{
    const user = await Usuario.findByPk(id)

    await Usuario.update({
        banned: !user.dataValues.banned
    },
    {where: {id: id}})

    res.send(`Usuario ${id} baneado.`)
    }catch(e){
        res.send(e)
    }
});

module.exports = router;