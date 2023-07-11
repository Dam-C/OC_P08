import { NavLink, Link } from "react-router-dom";
import logoHome from "../assets/logo/LOGO-color.png";
import "../styles/banner.css";

const Banner = () => {
  return (
    <header className="the-header">
      <Link to="/">
        <img src={logoHome} className="header__logo" />
      </Link>
      <ul className="navigation">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          onClick={() => homeNotActive(true)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          A Propos
        </NavLink>
      </ul>
    </header>
  );
};

export default Banner;
