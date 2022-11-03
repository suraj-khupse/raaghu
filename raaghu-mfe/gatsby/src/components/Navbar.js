import * as React from "react";
import icon from "../images/logo.png"
import { Link } from "gatsby";


const Navbar = () => {

  return (
    <nav className="navbar py-0 navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-0">
        <div className="row w-100">
          <div className="col-md-2">
            <Link to="/" className="navbar-brand">
            <img src={icon} alt="logo" width="80" height="auto" className="d-inline-block align-text-top" />
            </Link>
            <button class="navbar-toggler mt-3 float-end d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="col-md-7">
           
            <div
              className="collapse navbar-collapse  pt-3"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Brand
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="index.html">
                    Foundation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Components</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="index.html">
                    Themes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">UI Kits</Link>
                </li> */}
              </ul>
            </div>
          </div>
            {/* <div className="col-md-3 text-end">
              <div className="pt-4 mx-4">
                <div
                  className="spinner-grow spinner-grow-sm text-danger"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                <Link className="h6 text-white pl-4">
                  Coming Soon !
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
