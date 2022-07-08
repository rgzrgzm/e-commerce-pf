import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addPriceCart,
  removeCart,
  removePriceCart,
} from "../../../redux/actions/cart";

import { List, Img, Li , Text , Amount, Button , Div , CloseButton} from "./styles";

export default function OrderItem({ item }) {
  const [price, setPrice] = useState(item.precio);
  const [amount, setAmount] = useState(item.cantidad);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPriceCart(price, item.id));
  }, [price]);
  const incAmount = () => {
    setAmount(amount + 1);
    setPrice((amount + 1) * item.precio);
  };
  const decAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setPrice((amount - 1) * item.precio);
    }
  };
  const removeItem = () => {
    dispatch(removeCart(item.id));
    dispatch(removePriceCart(item.id));
  };
  return (
    <Div>
      <CloseButton onClick={removeItem}>X</CloseButton>
      <List>
        <Li>
          <Img src={`${item.imagen}`} alt={`Imagen de ${item.nombre}`} />
        </Li>
        <Li>
          <Text>
            <h3>{item.nombre}</h3>
            <h5>{item.descripcion}</h5>
          </Text>
        </Li>
        <Li>
          <h3>${item.precio}</h3>
        </Li>
        <Li>
          <Amount>
            <Button onClick={decAmount}>-</Button>
            <p>{amount}</p>
            <Button onClick={incAmount}>+</Button>
          </Amount>
        </Li>
        <Li>
          <h3>${price}</h3>
        </Li>
      </List>
    </Div>
  );
}
