import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.css";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <section className="header-bg mb-3">
        <header>
          <nav className="navbar navbar-expand-lg justify-content-between">
            <a className="navbar-brand logo" href="/">
              Weather App
            </a>

            <div className="d-flex input-full-width ">
              <ul className="login-signup-btn d-flex desktop-login">
                <li>
                  <Link
                    to="/"
                    className={location.pathname == "/" ? "active" : ""}
                  >
                    <span>Home</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/favorites"
                    className={
                      location.pathname == "/favorites" ? "active" : ""
                    }
                  >
                    <span>Favriout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
};

export default Header;
