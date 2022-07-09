import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  Main,
  Div,
  ImageContainer,
  Image,
  InfoContainer,
  H2,
  P,
  Stars,
  SizeInfo,
  Description,
  Size,
  Button,
  Review,
} from "./styles";
import { deleteProduct, getProduct } from "../../redux/actions/product";
import Loading from "../../components/Loader";
import { addToCart } from "../../redux/actions/cart";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ProductDetail = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  
  let size= ''
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const defineSize = (event)=>{
    size=event.target.innerHTML;    
  }
  
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };
  
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  
  let dispatch = useDispatch();
  
  let product = useSelector((state) => state.product.product);
  let loading = useSelector((state) => state.product.loading);
  let error = useSelector((state) => state.product.error);
  let { productId } = useParams();
  useEffect(() => {
    if (productId !== undefined) {
      dispatch(getProduct(productId));
    }
    return ()=>{
      dispatch(deleteProduct())
    }
  }, [productId]);

  const addCart = ()=>{
    if (product.categorium?.nombre === "Accesorios"){
      size='Sin talle'
    }
    let order={
      ...product,
      talle:size,
      cantidad:1,
    }
    if(order.talle){
      dispatch(addToCart(order))
      alert('Agregado al carrito')
    }
    else alert('Seleccione un talle')
  }
  
  if (error) return <div>Error! {error.message}</div>;
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  const formatPrice = new Intl.NumberFormat("es-AR").format(product.precio);
  console.log(product);
  return (
    <Main>
      <Div>
        <ImageContainer>
          <Image src={product?.imagen} />
        </ImageContainer>
        <InfoContainer>
          <H2>{product?.nombre}</H2>
          <P stock={8}>Precio: $ {formatPrice}</P>
          {/* <Stars>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={20}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </Stars> */}
          <SizeInfo>
            {product.categorium?.nombre !== "Accesorios" &&
              product.talles?.map((talle) => {
                return <Size onClick={defineSize} value={talle.talle} key={talle.id}>{talle.talle}</Size>;
              })}
          </SizeInfo>
          <Description>{product.descripcion}</Description>
          <Button onClick={addCart}>Add to cart</Button>
          {/* <Review placeholder="Enter a review of the product"></Review>
          <Button>Send review</Button> */}
        </InfoContainer>
      </Div>
    </Main>
  );
};

export default ProductDetail;
