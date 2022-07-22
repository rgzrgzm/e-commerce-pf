const createProductRouter = require("./createProduct");
const editProductRouter = require("./editProduct");
const productsRouter = require("./products");
const getTalles = require("./getTalles");
const productRouter = require("./product.js");
const deleteProductRouter = require("./deleteProduct");
const cargarProductDbRouter = require("./product-DB");

module.exports = {
  createProductRouter,
  deleteProductRouter,
  editProductRouter,
  productsRouter,
  getTalles,
  productRouter,
  cargarProductDbRouter,
};
