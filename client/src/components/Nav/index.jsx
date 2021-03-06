import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { ImExit } from "react-icons/im";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./nav.module.css";
import Search from "./search";
import { Contenido } from "./style";
import logo from "../../../assets/Logo.svg";
import { RiAddBoxFill } from "react-icons/ri";
import { subMenu } from "./submenu";
import DropDown from "../DropDown";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/autenticacion";
import Loading from "../Loader";
import { clearLocalStorage } from "../../redux/actions/cart";
import { removeFavs } from "../../redux/actions/favoritos";

export default function NavBar({ products }) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  let data = products.map((a) => ({ nombre: a.nombre, im: a.imagen }));
  const [dropdown, setDropdown] = useState(false);

  const handleChange = (newValue) => {
    setDropdown(newValue);
  };

  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const auth = useSelector((state) => state.auth);
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.isAdmin);
    }
  }, [currentUser]);

  function check_cookie_name(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) {
      return match[2];
    } else {
      return null;
    }
  }
  const result = check_cookie_name("jwt");

  useEffect(() => {
    if (!result) {
      dispatch(logout());
    }
  }, [result]);

  const logOut = () => {
    dispatch(logout());
    dispatch(clearLocalStorage());
    dispatch(removeFavs())
    window.location.reload();
    navigation("/");
  };
  const toProfile = () => {
    navigation("/profile");
  };

  let content;
  let contentExit;
  if (error) {
    content = <div>{error}</div>;
  }
  if (loading) {
    content = (
      <div>
        <Loading />
      </div>
    );
  }
  if (currentUser) {
    content = (
      <>
        <li onClick={toProfile} className={style.icons}>
          {currentUser.name}
        </li>
        {showAdminBoard && (
          <li className={style.icons}>
            <NavLink to="/admin/dashboard/">
              <GrUserAdmin />
            </NavLink>
          </li>
        )}
      </>
    );
    contentExit = (
      <li onClick={logOut} className={style.icons}>
        <ImExit />
      </li>
    );
  }
  if (!currentUser) {
    content = (
      <li>
        <BsFillPersonFill onClick={() => setDropdown(!dropdown)} />
        <DropDown
          subMenu={subMenu}
          dropdown={dropdown}
          onChange={handleChange}
        />
      </li>
    );
  }

  return (
    <div className={style.full}>
      <Contenido
        className={!currentUser ? style.container : style.containerLoggedIn}
      >
        <li>
          <NavLink to="/">
            <img src={logo} className={style.logo} alt="logo" />
          </NavLink>
        </li>
        <li className={style.searching}>
          <Search data={data} />
        </li>
        {content}
        <li className={style.icons}>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </li>
        {contentExit}
      </Contenido>
    </div>
  );
}
