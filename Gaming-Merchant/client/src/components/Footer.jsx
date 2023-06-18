import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-light pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Quick Links</h3>
            <div className="links">
              <ul>
                <li>
                  <Link className="nav-link" to="/">Explore</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/signup">Register</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Snappcoins</h3>
            <div className="links">
              <ul>
                <li>
                  <Link className="nav-link">Connect Wallet</Link>
                </li>
                <li>
                  <Link className="nav-link">Faq</Link>
                </li>
                <li>
                  <Link className="nav-link">Become a Partner</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Resources</h3>
            <div className="links">
              <ul>
                <li>
                  <Link className="nav-link" >Community</Link>
                </li>
                <li>
                  <Link className="nav-link" >How it Works</Link>
                </li>
                <li>
                  <Link className="nav-link" >Latest Products</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <h3>Keep in touch</h3>
            <div id="newsletter">
              <div id="message-newsletter"></div>
              <form method="post" name="newsletter_form" id="newsletter_form">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon1"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div className="row add_bottom_25 text-center">
          <div className="col">
            <p>Terms and Conditions © 2023 Snappcoins</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
