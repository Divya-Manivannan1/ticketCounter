import { useState } from "react";
import menu from "../../assets/images/menu-icon.png";
import NavMenu from "../NavMenu/NavMenu";
import "./Nav.scss";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
      {showNav && <NavMenu onClose={toggleNav} />}
      <h1>Ticket Counter</h1>
      <img
        src={menu}
        className="nav__item"
        alt="menu icon"
        onClick={toggleNav}
      />
    </nav>
  );
};

export default Nav;
