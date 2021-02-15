import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faCarSide,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./ActionBar.css";
import { withAuth } from "../../lib/AuthProvider";

function ActionBar({ user = {} }) {
  return (
    <nav>
      {user && !user.isDriver && (
        <div className="nav-action-bar ">
          <Link to="/" className="nav__link">
            <FontAwesomeIcon icon={faComments} className="nav__icon " />
            <span>Solicitar</span>
          </Link>
          <Link to="/myrides" className="nav__link">
            <FontAwesomeIcon icon={faUser} className="nav__icon " />
            <span>Mis viajes</span>
          </Link>
        </div>
      )}

      {user && user.isDriver && (
        <div className="nav-action-bar ">
          <NavLink
            exact
            className="nav__link"
            to="/"
            activeClassName="nav__link--active"
          >
            <FontAwesomeIcon icon={faComments} className="nav__icon " />
            <span>Viaje</span>
          </NavLink>

          <NavLink
            exact
            className="nav__link "
            to="/mycar"
            activeClassName="nav__link--active"
          >
            <FontAwesomeIcon icon={faCarSide} className="nav__icon " />
            <span>Mi coche</span>
          </NavLink>
          <NavLink
            exact
            to="/myrides"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            <FontAwesomeIcon icon={faUser} className="nav__icon " />
            <span>Mis servicios</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default withAuth(ActionBar);
