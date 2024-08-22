import IntiC from "./intic";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navbar.css";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md bgnavbar sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand btnColor" href="#">
            <AllInclusiveIcon></AllInclusiveIcon>
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle btn"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  type="button"
                >
                  Serviecs
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="#action" className="dropdown-item " href="#">
                      Digital Marketion
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SEO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Social Media
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <Link
                  to="#fourth"
                  className="nav-link active btnColor"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#about" className="nav-link btnColor" href="#">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="#pricing" className="nav-link btnColor" href="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <IntiC />
    </div>
  );
}
