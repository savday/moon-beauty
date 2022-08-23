import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as MoonLogo } from "../../assets/moon.svg";

import './Nav.styles.scss'

const Nav = () => {
  return (
    <Fragment>
      <div className="nav">
        <Link className="logo-container" to="/">
          <MoonLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Nav;
