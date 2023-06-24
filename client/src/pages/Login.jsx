import React, { useState  } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/images/logo-light-mode.svg';
import bg from '../assets/images/bg.png';
import '../assets/styles/login.css';
const Login = () => {
  const navigate = useNavigate();
  const fetchData = useFetch();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = { url: `/auth/login`, method: "post", data: formData };
    fetchData(config).then((data) => {
      localStorage.setItem('token', data.token);
      navigate("/verify",{ state: { id: data.id, email: data.email } });
    })
    .catch(error => {
      // Handle the error here, e.g., log the error or display an error message
      console.error('Error fetching tasks:', error);
    });
  }


  return (
    <div className='box'>
      <div className='form-wrapper'>
        <form className='shadow p-5'>
          <figure>
              <a href="/" className="logo_account">
                <img src={logo} alt="" width="140" height="35" className="light"/>
              </a>
          </figure>
          <div className="access_social">
              <a href="#0" className="social_bt facebook"><FontAwesomeIcon icon={faFacebook}style={{marginRight:1+'rem'}} />  Register with Facebook</a>
              <a href="#0" className="social_bt google"><FontAwesomeIcon icon={faGoogle}style={{marginRight:1.5+'rem'}} /> Register with Google</a>
            </div>
            <div className="divider">
              <span>Or</span>
            </div>
          <div className="mb-3">
           
            <input type="email"  className="form-control" name='email' placeholder='Email' value={formData.email} id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' autoFocus onChange={handleChange} />
          </div>
          <div className="mb-3">
           
            <input type="password" className="form-control" name='password' placeholder='Password' value={formData.password} id="exampleInputPassword1" autoComplete='off' onChange={handleChange} />
          </div>
          <button type="submit" className="btn button btn-lg" onClick={handleSubmit} >Login</button>
        
          <div className='pt-4'>
              <Link to="/signup" className='navigate'><center>New To SnapCoins? Sign up!</center></Link>
          </div>

        </form>
      </div>
      <div className='image-wrapper'>
            <img src={bg} alt='loading' width={100+'%'} height={740+'px'}/>
      </div>
    </div >
  )
}

export default Login
