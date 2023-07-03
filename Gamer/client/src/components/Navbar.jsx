import React, { useState,useEffect } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { gamerProfile, logout } from "../redux/actions/gamerAction";

export default function Navbar(props) {
  const gamerState = useSelector(state => state.gamerReducer)
	const gamer = gamerState.gamer
  const [showDropdown, setShowDropdown] = useState(false);

  
	const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
      setImageSrc(
        gamer.image
          ? `${process.env.REACT_APP_URL}/api/profile/img/${gamer.image}`
          : "https://distil.in/demo/snappcoins/img/avatar-user.jpg"
      );
    }, [gamer.image]);


  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

	const dispatch = useDispatch();

	const handleLogoutClick = () => {
		dispatch(logout());
	  }
  const handleEditProfile = () =>{
    // dispatch(());
    dispatch(gamerProfile(gamer));
  }
  const handleDarkModeToggle = () => {
    props.onDarkModeToggle();
    const rootElement = document.documentElement;
    rootElement.classList.toggle('dark-mode');
  };
  return (
    <div>
      <nav style={{height:'77px'}} className={`navbar navbar-expand-lg navbar-light ${props.darkMode ? 'dark-mode' : ''}` }>
        <div className="container">
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
            <div className="btn bg-white text-success mx-2" onClick={handleDarkModeToggle}>
            {props.darkMode ? (
                <Brightness7OutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </div>
            <div className="d-flex justify-content-center">
              <div className="overflow-hidden">
             
											{/* <!-- Profile picture image--> */}
											{!imageLoaded && <div className="loading-spinner"></div>}
											<img 
												className={`img-account rounded-circle mb-4 ${imageLoaded ? "" : "hidden"}`}
												src={imageSrc}
												alt=""
												width="38rem"
                        height="38rem"
                        borderRadius="50%"
                        marginTop="8rem"
												onLoad={() => setImageLoaded(true)}
												onError={() => setImageLoaded(false)}
                        onClick={handleClick}
											/>
										
              </div>
            </div>
            <Link className="mx-1" to="/" style={{textDecoration: "none",color:"green"}}>Balance</Link>
          </div>
        </div>
      </nav>

      {showDropdown && (
        <ul className={`dropdown-menu show ${props.darkMode ? 'dark-mode-dropdown' : ''}`} style={{ position: "fixed", top: "60px", left: "calc(75% + 150px)", transform: "translateX(-50%)", width: "250px", height: "500px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "4px", padding: "10px" }}>
          <Link to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<figure>
											{/* <!-- Profile picture image--> */}
											{!imageLoaded && <div className="loading-spinner"></div>}
											<img 
												className={`img-account rounded-circle mb-4 ${imageLoaded ? "" : "hidden"}`}
												src={imageSrc}
												alt=""
												height="54.375rem"
												width="54.375rem"
                        
												onLoad={() => setImageLoaded(true)}
												onError={() => setImageLoaded(false)}
											/>
										</figure>
										<div className="balance">
											<h6 className="mb-0">Balance</h6>
											<span>{gamer.walletMoney}  snapps</span>
										</div>
									</Link>
          <hr />
          
          <li><hr className="dropdown-divider" /></li>
          <li style={{ marginBottom: "10px" }}><Link to="#" style={{ textDecoration: "none", color: "inherit" }}><AccountCircleOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>My Profile</span></Link></li>
          <li style={{ marginBottom: "10px" }}><Link onClick={handleEditProfile} to="/profile" style={{ textDecoration: "none", color: "inherit" }}><EditOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>Edit Profile</span></Link></li>
          <li style={{ marginBottom: "10px" }}><Link to="#" style={{ textDecoration: "none", color: "inherit" }}><AccountBoxOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>Account</span></Link></li>
          <li style={{ marginBottom: "10px" }}><Link to="/myitems" style={{ textDecoration: "none", color: "inherit" }}><ShoppingBagOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>My Items</span></Link></li>
          <li onClick={handleLogoutClick}><Link  style={{ textDecoration: "none", color: "inherit" }}><ExitToAppOutlinedIcon fontSize="small" /> <span style={{ color: "inherit" }}>Log Out</span></Link></li>
        </ul>
      )}
    </div>
  );
}