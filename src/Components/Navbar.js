import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top  bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DRAMIFFIC
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
