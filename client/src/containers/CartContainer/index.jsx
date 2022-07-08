import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Cart/Header";
import OrderList from "../../components/Cart/List";
import Pricing from "../../components/Cart/Pricing";
import { List, Li , Error} from "./styles";

export default function ShoppingCart() {
  const shoppingCart = useSelector((store) => store.cart.shoppingCart);
  return (
    <div>
      { shoppingCart && shoppingCart.length ? (
        <List>
          <Li>
            <Header cantidad={shoppingCart.length} />
          </Li>
          <Li>
            <OrderList shoppingCart={shoppingCart} />
          </Li>
          <Li>
            <Pricing />
          </Li>
        </List>
      ) : (
        <Error>No hay items en su carrito</Error>
      )}
    </div>
  );
}
