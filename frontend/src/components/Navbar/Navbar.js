import React from "react";
import { withAuth } from "../../lib/AuthProvider";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar({ user = {}, logout = () => {} }) {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="../../../BQcar-logo.png" alt="logo" className="bq-logo " />
        </a>
      </div>
      <div>
        <div className="navbar-end">
          <div className="navbar-item">
            {user && (
              <div >
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="logout-btn"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="nav__icon__logout" color="#EC7063" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withAuth(Navbar);
