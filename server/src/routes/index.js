const { Router } = require("express");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const userRouter = require("./user.js");
const productsRouter = require("./products");
const createProductRouter = require("./createProduct");
const categoryRouter = require("./category");
const editProductRouter = require("./editProduct");
const productRouter = require("./product.js");
const favoritosRouter = require("./favoritos");
const actualizarPedidoRouter = require("./cambiarEstadoPedido");
const userToAdminRouter = require("./userToAdmin");
const deleteProductRouter = require("./deleteProduct");
const deleteCategoryRouter = require("./deleteCategory");
const cargarProductDbRouter = require("./product-DB");
const cargarUserDbRouter = require("./user-DB");
const getCategories = require("./getCategories");
const getTalles = require("./getTalles");
const getPedidosRouter = require("./getPedidos");
const getPedidoUser = require("./getPedidoUser");
const getPedidoId = require("./getPedidoId");
const createPedido = require("./createPedido");
const getRating = require('./getRating');
const getRatingProduct = require("./getRatingProduct");
const getRatingUser = require("./getRatingUser");
const postRating = require('./postRating');
const deletleReview = require("./deleteReview");
const getRatingUserID = require("./getRatingUserID");
const deleteUser = require("./deleteUser");
const deletePedido = require('./deletePedido');



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/user", userRouter);
router.use("/products", productsRouter);
router.use("/create/product", createProductRouter);
router.use("/category", categoryRouter);
router.use("/edit/product", editProductRouter);
router.use("/product", productRouter);
router.use("/favoritos/wishlist", favoritosRouter);
router.use("/admin/pedido", actualizarPedidoRouter);
router.use("/admin/usuario", userToAdminRouter);
router.use("/product/delete", deleteProductRouter);
router.use("/category/delete", deleteCategoryRouter);
router.use("/admin/crearorigen", cargarProductDbRouter);
router.use("/admin/crearusuarios", cargarUserDbRouter);
router.use("/categories", getCategories);
router.use("/talles", getTalles);
router.use("/pedidos", getPedidosRouter);
router.use("/pedidos/user", getPedidoUser);
router.use("/pedido", getPedidoId);
router.use("/pedido/crear", createPedido);
router.use('ratings', getRating);
router.use("/ratings", getRatingProduct);
router.use("/usuario/ratings", getRatingUser);
router.use('/ratings/crear', postRating);
router.use("/ratings", deletleReview);
router.use("/ratings/usuario", getRatingUserID);
router.use("/usuario", deleteUser);
router.use('/pedido', deletePedido);

module.exports = router;
