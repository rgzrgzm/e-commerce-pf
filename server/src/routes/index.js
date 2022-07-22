const { Router } = require("express");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRouter = require("./user");

const cargarUserDbRouter = require("./user-DB");

const stockRouter = require("./stock");

const deletleReview = require("./deleteReview");

const { googleAuth } = require("./user/controllers/user.google.controller");

const {
  productsRouter,
  createProductRouter,
  editProductRouter,
  productRouter,
  deleteProductRouter,
  cargarProductDbRouter,
  getTalles,
} = require("./product");

const {
  categoryRouter,
  deleteCategoryRouter,
  getCategories,
} = require("./category");

const { favoritosRouter, createFavoritos } = require("./favorito");
const deleteUser = require("./deleteUser");

const {
  actualizarPedidoRouter,
  getPedidosRouter,
  getPedidoUser,
  getPedidoId,
  createPedido,
  deletePedido,
  editarPedidoFactura,
} = require("./pedido");
const { userToAdminRouter, getUsers, banRouter } = require("./admin");

const {
  getRating,
  getRatingProduct,
  getRatingUser,
  postRating,
  getRatingUserID,
} = require("./rating");

const {
  createPreference,
  confirmarCompra,
  productoDespachado,
  productoLlegando,
  compraEntregada,
  cargarFactura,
} = require("./checkout");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user", userRouter);
router.post("/v1/auth/google", googleAuth);
router.use("/products", productsRouter);
router.use("/create/product", createProductRouter);
router.use("/category", categoryRouter);
router.use("/edit/product", editProductRouter);
router.use("/product", productRouter);
router.use("/favoritos/wishlist", favoritosRouter);
router.use("/create/favoritos", createFavoritos);
router.use("/admin/pedido", actualizarPedidoRouter);
router.use("/admin/usuario", userToAdminRouter);
router.use("/usuarios", getUsers);
router.use("/product/delete", deleteProductRouter);
router.use("/category/delete", deleteCategoryRouter);
router.use("/admin/crearorigen", cargarProductDbRouter);
router.use("/admin/crearusuarios", cargarUserDbRouter);
router.use("/categories", getCategories);
router.use("/stock", stockRouter);
router.use("/talles", getTalles);
router.use("/pedidos", getPedidosRouter);
router.use("/pedidos/user", getPedidoUser);
router.use("/pedido", getPedidoId);
router.use("/pedido/crear", createPedido);
router.use("/rating", getRating);
router.use("/ratings", getRatingProduct);
router.use("/usuario/ratings", getRatingUser);
router.use("/ratings/crear", postRating);
router.use("/ratings", deletleReview);
router.use("/ratings/usuario", getRatingUserID);
router.use("/usuario", deleteUser);
router.use("/pedido", deletePedido);
router.use("/create_preference", createPreference);
router.use("/usuario/confirmacion", confirmarCompra);
router.use("/admin/despachar", productoDespachado);
router.use("/admin/correo", productoLlegando);
router.use("/admin/entrega", compraEntregada);
router.use("/factura/crear", cargarFactura);
router.use("/factura/edit", editarPedidoFactura);
router.use("/ban", banRouter);

module.exports = router;
