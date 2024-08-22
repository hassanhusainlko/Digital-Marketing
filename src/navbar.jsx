import IntiC from "./intic";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./navbar.css";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const navlink = [
    {
      name: "CONTACT",
      target: "#contact",
    },
    {
      name: "ABOUT",
      target: "#about",
    },
    {
      name: "PRICING",
      target: "#pricing",
    },
  ];

  const services = [
    { name: "SEO" },
    { name: "DIGITAL MATKETING" },
    { name: "SOCIAL MEDIA" },
  ];

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
                  {services.map((service, idx) => (
                    <li key={idx}>
                      <a className="dropdown-item ">{service.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
              {navlink.map((link, idx) => (
                <li className="nav-item" key={idx}>
                  <Link
                    to={link.target}
                    className="nav-link active btnColor"
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <IntiC />
    </div>
  );
}
