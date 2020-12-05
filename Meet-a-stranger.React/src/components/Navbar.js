import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-navbar.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border rounded py-0 fixed-top">
      <Link to="/">
        <img
          src={logo}
          height="75"
          className="d-inline-block align-top py-1"
          alt=""
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto pr-5">
          <li className="nav-item active px-2">
            <Link className="nav-link text-secondary mb-0" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item dropdown px-2">
            <a
              className="nav-link dropdown-toggle text-secondary"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Friends
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <p className="dropdown-item">Action</p>
              <p className="dropdown-item">Another action</p>
            </div>
          </li>
          <li className="nav-item p-2 d-flex justify-content-center align-items-center">
            <a>
              <i className="fa fa-bell mx-auto text-secondary"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
