import React from "react";

import { Main } from "./styles";
import CardsContainer from "../CardsContainer";
import LeftBar from "../../components/LeftBar";
import Footer from "../../components/Footer";
import Paginator from "../../components/Paginator";

const MainContainer = ({ products, paginateInfo }) => {

  console.log(paginateInfo)

  return (
    <Main>
      <LeftBar />
      <CardsContainer products={products} />
      <Paginator paginateInfo={paginateInfo} />
    </Main>
  );
};

export default MainContainer;
