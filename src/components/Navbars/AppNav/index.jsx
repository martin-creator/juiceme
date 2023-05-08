import React from "react";
import { Link } from "gatsby";

const Navbar = ({ navbarRef }) => {
  return (
    <nav
      className="navbar navbar-expand-lg justify-content-end  navbar-light style-4 "
      ref={navbarRef}
    >
      <div className="container">
        <a className="navbar-brand" href="/home-app-landing">
          <img src="/assets/img/logo_lgr.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"></div>
        <div className="collapse navbar-collapse"></div>
        <div className="collapse navbar-collapse"></div>
        <div className="collapse navbar-collapse"></div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase ">
            <li className="nav-item  mb-2 ">
              <a
                className=" btn rounded-pill bg-blue4 fw-bold text-white  "
                href="https://calendly.com/juiceme"
                rel="noreferrer"
                target="_blank"
                style={{ marginRight: "12px" }}
                
              >
                Book Demo
                {/* <small className="hot alert-danger text-danger">hot</small> */}
              </a>
            </li>
            <li className="nav-item  mb-2  mr-10">
              <Link
                to="#"
                className="btn rounded-pill bg-blue4 fw-bold text-white "
              >
                Sign In
              </Link>
            </li>
          </ul>
          {/* <div className="nav-side">
            <div className="d-flex align-items-center">
              <a href="#" className="search-icon me-4">
                <i className="bi bi-person"></i>
              </a>
              <Link to="/page-contact-app" className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold">
                <span>Join iteck Hub <i className="bi bi-arrow-right ms-1"></i> </span>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
