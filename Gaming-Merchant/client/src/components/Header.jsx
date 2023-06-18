import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ borderBottom: "0.5px solid rgb(237, 232, 232)" }}>
      <nav className="navbar navbar-expand-lg bg-body-teritiary" style={{ margin: "2px 300px" }}>
        <div className="container-fluid">
          <img src="logo.svg" alt="" width="30px" />
          <Link className="navbar-brand fs-3 fw-bold" to="#">Snappcoins</Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto fs-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Explore</Link>
              </li>
            </ul>
            <div style={{ borderLeft: "1px solid black", height: "35px", marginRight: "10px" }}></div>
            <button className="btn btn-light d-flex flex-direction-left">
              <img src="avatar1.jpg" alt="" width="50px" style={{ borderRadius: "50%" }} />
              <div className="container text-left">Jungle Rummy</div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
