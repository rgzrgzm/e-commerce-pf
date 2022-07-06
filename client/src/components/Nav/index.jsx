import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import style from "./nav.module.css";
import Search from "./search";
import { Contenido } from "./style";

export default function NavBar() {
  return (
    <div className={style.full}>
      <Contenido className={style.container}>
        <li>
          <NavLink to="/" style={{ fontSize: "32px" }}>
            Logo
          </NavLink>
        </li>
        <li className={style.searching}>
          <Search />
        </li>
        <li>
          <NavLink to="/profile">
            <BsFillPersonFill />
          </NavLink>
        </li>
        <li>
          <NavLink to="/newUser"></NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </li>
      </Contenido>
    </div>
  );
}