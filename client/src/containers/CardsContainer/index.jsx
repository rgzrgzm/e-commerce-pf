import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../components/Card";
import { Section } from "./styles";
import { getProducts } from "../../redux/actions/product";

export default function CardContainer({ products }) {
  return (
    <Section>
      {products &&
        products.map((product) => <Card key={product.id} {...product} />)}
    </Section>
  );
}
