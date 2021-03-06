import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/Nav";
import MainContainer from "./containers/MainContainer";
import AdminHub from "./pages/Admin";
import ShoppingCart from "./pages/Cart";
import CreateUser from "./pages/CreateUser";
import ProductDetail from "./pages/Detail";
import Profile from "./pages/Profile";

import RequireAuth from "./components/RequireAuth";

import Login from "./pages/Login";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateProduct from "./components/CreateProduct";
import Footer from "./components/Footer";
import Loading from "./components/Loader";
import NoMatch from "./pages/NoMatch";
import { getProducts } from "./redux/actions/product";
import { ErrorContainer } from "./styles/appStyle";
import DashboardAdmin from "./components/DashboardAdmin";
import Users from "./pages/Admin/users";
import Products from "./pages/Admin/products";
import Sales from "./pages/Admin/sales";
import Confirmacion from "./pages/Confirmacion";
import { GlobalStyle } from "./styles/GlobalStyles";
import { clearMsg } from "./redux/actions/autenticacion";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess/CheckoutSuccess";
import ForgotPassword from "./pages/ForgotPasword";
import ResetPassword from "./pages/ResetPassword";
import Compras from "./pages/Compras";
import Favoritos from "./pages/Favoritos";

function handleErrors(response, rest) {
  if (response.status === 400) {
    throw rest.name;
  }
  return rest;
}

function App() {
  const error = useSelector((state) => state.product.error);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(clearMsg());
  }, [location]);

  useEffect(() => {
    if (error) {
      setTimeout(() => dispatch(getProducts()), 1000);
    }
  }, [error]);

  if (error) {
    return (
      <div>
        <GlobalStyle />
        <NavBar products={products} />
        <ErrorContainer>Error! {error.message}</ErrorContainer>
      </div>
    );
  }
  if (loading)
    return (
      <ErrorContainer>
        <Loading />
      </ErrorContainer>
    );

  return (
    <div className="App">
      <GlobalStyle />
      <NavBar products={products} />
      {/* {location.pathname !== "/" ? <NavBar /> : null} */}
      <Routes>
        <Route exact path="/" element={<MainContainer products={products} />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/olvide-password" element={<ForgotPassword />} />
        <Route path="/olvide-password/:token" element={<ResetPassword />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/cart/" element={<ShoppingCart />} />

        <Route element={<RequireAuth isAdmin={false} />}>
          <Route path="/profile/" element={<Profile />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/profile/compras/:id" element={<Compras />} />
          <Route path="/profile/favoritos/:id" element={<Favoritos />} />
        </Route>

        <Route path="/confirmar/:id" element={<Confirmacion />} />

        <Route element={<RequireAuth isAdmin={true} />}>
          <Route path="/admin" element={<AdminHub />} />
          <Route path="/admin/dashboard/*" element={<DashboardAdmin />} />
        </Route>

        <Route
          path="/checkout/success/:idPedido"
          element={<CheckoutSuccess />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
