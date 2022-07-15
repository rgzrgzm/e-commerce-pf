const { Router } = require("express");
const router = Router();
const mercadopago = require("mercadopago");
//Provisional de esta forma, luego va en el .env
const ACCESS_TOKEN = "APP_USR-2136680771902247-071214-4767199d5dfa22b7c0885a9e58ff3bec-1159384629";

mercadopago.configure({
    access_token: ACCESS_TOKEN,
});

router.post("/", (req, res) => {
    const {carrito, datos} = req.body
    console.log(req.body)
    const productos = [];
    carrito.map((p) => {
        let item = {
            title: "ropita bonita",
            unit_price: p.subtotal / p.cantidad,
            quantity: p.cantidad,
            description: "ROPA"
        }
        productos.push(item);
    })

    const pagador = {
        name: datos.nombre,
        surname: datos.apellido,
        identification: {
            type: "DNI",
            number: datos.documento
        },
        address: {
            street_name: datos.direccion
        }
    }
    
    let preference = {
        items: productos,
        payer: pagador,
        payment_methods: {
            excluded_payment_types: [
                {
                    id: "ticket"
                }
            ],
            installments: 12
            },
        back_urls:{
            success: "http://localhost:3000/checkout/success",
            failure: "http://localhost:3000/checkout/success",
        },
        auto_return: "approved",
        binary_mode: true,
    };

    mercadopago.preferences.create(preference)
        .then(function(response){
            res.json(response.body);
        }).catch(function (error){
            console.log(error);
        })
})

module.exports = router;
