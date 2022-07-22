const actualizarPedidoRouter = require("./cambiarEstadoPedido");
const createPedido = require("./createPedido");
const editarPedidoFactura = require("./editarPedidoFactura");
const getPedidoId = require("./getPedidoId");
const getPedidosRouter = require("./getPedidos");
const getPedidoUser = require("./getPedidoUser");
const deletePedido = require("./deletePedido");

module.exports = {
  actualizarPedidoRouter,
  createPedido,
  editarPedidoFactura,
  getPedidoId,
  getPedidosRouter,
  getPedidoUser,
  deletePedido,
};
