import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyCart, removeCart } from "../../redux/actions/cart";
import { Link } from "react-router-dom";
import {
  MainDiv,
  Div,
  Header,
  Main,
  Detail,
  Options,
  Button,
  Closing,
  Img,
  Close,
  IncDiv,
  Text,
  Amount,
  DecButton,
  IncButton,
  Ok,
  AddMore,
  LinkButton,
  Trash,
} from "./styles";

export default function AddPopUp({ id, nombre, img, precio, close , talle}) {
  let [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(precio); //Pasaria precio por props

  const dispatch = useDispatch();

  const incAmount = () => {
    setAmount(amount + 1);
    setPrice((amount + 1) * precio);
  };
  const decAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setPrice((amount - 1) * precio);
    }
  };
  const addMore = () => {
    let newOrder = {
      id,
      amount,
    };
    dispatch(modifyCart(newOrder));
    alert(`${amount} items agregados al carrito`);
  };
  const deleteCartItem = () => {
    dispatch(removeCart(id));
    close();
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR").format(price);
  };
  return (
    <MainDiv>
      <Header>
        {
          talle.current ==='Sin talle' ? (<h2> <Ok /> {nombre} añadido al carrito </h2>) : (<h2><Ok /> {nombre} talle:{talle.current} añadido al carrito</h2>)
        }      
        {/* <Close onClick={close}>x</Close> */}
      </Header>
      <Main>
        <Img src={`${img}`} />
        <Detail>
          {
            talle.current !== 'Sin talle' ? (<h4>Talle: {talle.current}</h4>) : null
          }
          <h3>Subtotal: ${formatPrice(precio)}</h3>
          
          <Button onClick={deleteCartItem}>Eliminar item <Trash/></Button>
        </Detail>
        <Options>
                <h3>Desea añadir más?</h3>
                <IncDiv>
                  <DecButton onClick={decAmount} size="lg"/>
                  <Amount>{amount}</Amount>
                  <IncButton onClick={incAmount} size="lg"/>
                </IncDiv>
                {
                  amount >1 ? (<h4>Se agregarán {amount} prendas</h4>) : (<h4>Se agregará 1 prenda</h4>)
                }
                
                <h4>Subtotal: ${formatPrice(price+precio)}</h4>
                <Button onClick={addMore}>Añadir <AddMore/></Button>
        </Options>
      </Main>
        <Closing>
          <LinkButton to="/cart">Ir al carrito</LinkButton>
              {/* <Link to="/cart"><Button>Ir al carrito</Button></Link> */}
              <Button onClick={close}>Seguir comprando</Button>
        </Closing>
    </MainDiv>
  );
}
