import { Link } from "react-router-dom";
import blackCross from "../../assets/images/xmark-solid.svg";
import "./NavMenu.scss";

type NavMenuProps = {
  onClose: () => void;
};

const NavMenu = ({ onClose }: NavMenuProps) => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img
          src={blackCross}
          alt="Close menu"
          className="nav-menu__cross"
          onClick={onClose}
        />
        <Link to="/ticketCounter/" className="nav-menu__item" onClick={onClose}>
          Home
        </Link>

        <Link
          to="/ticketCounter/counter"
          className="nav-menu__item"
          onClick={onClose}
        >
          Ticket Counters
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
