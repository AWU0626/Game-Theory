import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container-fluid px-5">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <Link className="nav-link" to="/" style={{color: "#D2D2D2"}}>
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/simulation" style={{color: "#D2D2D2"}}>
                Applications & Simulations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}