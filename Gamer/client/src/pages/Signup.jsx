import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import bg from "../assets/images/bg.png";
import logo from "../assets/images/logo-light-mode.svg";
import "../assets/styles/signup.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const fetchData = useFetch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: `/auth/register`,
      method: "post",
      data: formData,
    };

    fetchData(config)
      .then((data) => {
        console.log(data.userId);
        navigate("/verify", { state: { id: data.userId, email: data.email } });
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="box">
        <div className="form-wrapper">
          <form className="p-5">
            <figure>
              <a href="/" className="logo_account custom-logo">
                <img
                  src={logo}
                  alt=""
                  width="140"
                  height="35"
                  className="light"
                />
              </a>
            </figure>
            <div className="access_social">
              <div className="access_social">
                <a href="#0" className="social_bt facebook">
                  <span className="icon-wrapper">
                    <FacebookIcon
                      sx={{ fontSize: 30 }}
                      className="square-icon"
                    />
                  </span>
                  <span className="button-text">Register with Facebook</span>
                </a>

                <a href="#0" className="social_bt google">
                  <span className="icon-wrapper">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt="Google"
                      className="google-icon"
                    />
                  </span>
                  <span className="button-text">Register with Google</span>
                </a>
              </div>
            </div>
            <div className="divider">
              <span>Or</span>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control grey-border"
                name="userName"
                value={formData.userName}
                autoComplete="off"
                onChange={handleChange}
                autoFocus
                placeholder="Username"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control grey-border"
                name="email"
                value={formData.email}
                autoComplete="off"
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control grey-border"
                name="password"
                value={formData.password}
                autoComplete="off"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control grey-border"
                name="confirmpassword"
                value={formData.confirmpassword}
                autoComplete="off"
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>
            <button
              type="button"
              className="btn button btn-lg"
              onClick={handleSubmit}
            >
              Register Now!
            </button>

            <div className="pt-4">
              <Link to="/login" className="navigate">
                <center>Already have an account? Sign In</center>
              </Link>
            </div>
          </form>
        </div>
        <div className="image-wrapper">
          <img src={bg} alt="loading" width={100 + "%"} height={740 + "px"} />
        </div>
      </div>
    </>
  );
};

export default Signup;
