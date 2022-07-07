import { Route, Routes, useLocation } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import NavBar from "./components/Nav";
import ProductDetail from "./pages/Detail";
import AdminHub from "./pages/Admin";
import CreateUser from "./pages/CreateUser";
import ShoppingCart from "./pages/Cart";
import Profile from "./pages/Profile";
// import Login from "./pages/Login";
import { GlobalStyle } from "./styles/GlobalStyles";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import NoMatch from "./pages/NoMatch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/actions/product";
import Loading from "./components/Loader";
import "./App.css";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.product.error);
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (error) return <div>Error! {error.message}</div>;
  if (loading)
    return (
      <div className="App">
        <Loading />
      </div>
    );

  return (
    <div className="App">
      <GlobalStyle />
      <NavBar products={products} />
      {/* {location.pathname !== "/" ? <NavBar /> : null} */}
      <Routes>
        <Route exact path="/" element={<MainContainer products={products} />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="/admin/" element={<AdminHub />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/newUser" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart/" element={<ShoppingCart />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
