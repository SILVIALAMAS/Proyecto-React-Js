/** @format */

import "./Header.css";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";

export const Header = ({ cartCount = 0 }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo reactiva" />
          <span>Reactiva</span>
        </Link>
      </div>
      <Nav cartCount={cartCount} />
    </header>
  );
};
