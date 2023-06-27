import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import bg from '../assets/images/bg.png';
import logo from '../assets/images/logo-light-mode.svg';
import '../assets/styles/signup.css';
const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmpassword: "",
   
  });

  const fetchData = useFetch();
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = { url: `/auth/register`, method: "post", data: formData };
   // console.log(config)
    fetchData(config).then((data) => {
      console.log(data.userId)
      // localStorage.setItem('tempuid',data.userId)
      navigate("/verify",{ state: { id: data.userId, email: data.email } });
    })
    .catch(error => {
      // Handle the error here, e.g., log the error or display an error message
      console.error('Error fetching tasks:', error);
    });


  }


  return (
    <>
   
    <div className='box'>
        
        <div className='form-wrapper'>
       
          <form className='shadow p-5'>
            <figure>
              <a href="/" className="logo_account">
                <img src={logo} alt="" width="140" height="35" className="light"/>
              </a>
            </figure>
            <div className="access_social">
            <div className="access_social">
							<a href="#0" className="social_bt facebook">Login with Facebook</a>
							<a href="#0" className="social_bt google">Login with Google</a>
						</div>
            </div>
            <div className="divider">
              <center><span>Or</span></center>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" name='userName' value={formData.userName} autoComplete='off' onChange={handleChange} autoFocus placeholder='username' />
            </div>
            <div className="mb-3">
              
              <input type="text" className="form-control" name='email' value={formData.email} autoComplete='off' onChange={handleChange} placeholder='Email'/>
            </div>
            <div className="mb-3">
             
              <input type="text" className="form-control" name='password' value={formData.password} autoComplete='off' onChange={handleChange} placeholder='Password'/>
            </div>
            <div className="mb-3">
              
              <input type="text" className="form-control" name='confirmpassword' value={formData.confirmpassword} autoComplete='off' onChange={handleChange} placeholder='Confirm Password'/>
            </div>  
            <button type="button" className="btn button btn-lg" onClick={handleSubmit} >Register Now!</button>

            <div className='pt-4'>
              <Link to="/login" className='navigate'><center>Already have an account? Sign In</center></Link>
            </div>

          </form>
        </div>
        <div className='image-wrapper'>
            <img src={bg} alt='loading' width={100+'%'} height={740+'px'}/>
        </div>
      
    </div>
    </>
  )
}

export default Signup
