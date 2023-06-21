import React, { useState } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export default function Navbar(props) {
  
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light ${props.darkMode ? 'dark-mode' : ''}`}>
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/">
            {props.darkMode ? (
      <img src="https://distil.in/demo/snappcoins/img/logo.svg" alt="Logo" width="170" height="35" className="dark" onClick={handleClick} />
    ) : (
      <img src="https://distil.in/demo/snappcoins/img/logo-light-mode.svg" alt="Logo" width="170" height="35" className="light" onClick={handleClick} />
    )}
            </Link>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{marginTop:"1rem"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{marginTop:"1rem"}}>Explore</a>
              </li>
              <li>
                <span className="mx-3 divider"></span>
              </li>
            </ul>
            <div className="navbar-divider"></div>
            <div className="btn bg-white text-success mx-2" onClick={props.onDarkModeToggle}>
            {props.darkMode ? (
                <Brightness7OutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </div>
            <div className="d-flex justify-content-center">
              <div className="rounded-circle overflow-hidden" style={{ width: "35px", height: "35px" }}>
                <img src="https://distil.in/demo/snappcoins/img/avatar-user.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} onClick={handleClick} />
              </div>
            </div>
            <Link className="mx-1" to="/" style={{textDecoration: "none",color:"green"}}>Balance</Link>
          </div>
        </div>
      </nav>

      {showDropdown && (
        <ul className={`dropdown-menu show ${props.darkMode ? 'dark-mode-dropdown' : ''}`} style={{ position: "fixed", top: "60px", left: "calc(75% + 150px)", transform: "translateX(-50%)", width: "250px", height: "500px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "4px", padding: "10px" }}>
          <img src="https://distil.in/demo/snappcoins/img/hero_general.jpg" alt="" style={{ height: "100px", width: "100%", objectFit: "cover", marginTop: "0" }} />
          <hr />
          <li style={{ marginBottom: "10px" }}><h5>@{props.name}</h5></li>
          <li style={{ marginBottom: "10px" }}><p>Balance</p></li>
          <li style={{ marginBottom: "10px" }}><p>{props.Balance} snapps</p></li>
          <li><hr className="dropdown-divider" /></li>
          <li style={{ marginBottom: "10px" }}><Link to="/profile" style={{ textDecoration: "none", color: "inherit" }}><AccountCircleOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>My Profile</span></Link></li>
          <li style={{ marginBottom: "10px" }}><Link to="/edit-profile" style={{ textDecoration: "none", color: "inherit" }}><EditOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>Edit Profile</span></Link></li>
          <li style={{ marginBottom: "10px" }}><Link to="/account" style={{ textDecoration: "none", color: "inherit" }}><AccountBoxOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>Account</span></Link></li>
          <li style={{ marginBottom: "10px" }}><Link to="/items" style={{ textDecoration: "none", color: "inherit" }}><ShoppingBagOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>My Items</span></Link></li>
          <li><Link to="/logout" style={{ textDecoration: "none", color: "inherit" }}><ExitToAppOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>Log Out</span></Link></li>
        </ul>
      )}
    </div>
  );
}
