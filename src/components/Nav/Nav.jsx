/** @format */

import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = ({ cartCount = 0 }) => {
  return (
    <nav className="nav">
      <div className="enlaces">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          Carrito
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};
