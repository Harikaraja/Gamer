import React, { useCallback, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
// import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import Content from '../components/Content'
import Header from '../components/Header'
const Home = () => {

  // const [user,setUser] = useState();
  // const fetchData = useFetch();
  // // const navigate = useNavigate();

  // const fetchUser = useCallback(() => {
  //   const token = localStorage.getItem('token')
  //   const config = { url: "/profile", method: "get", headers: { Authorization: token } };
  //   fetchData(config, { showSuccessToast: false }).then(data => setUser(data.user));
  // }, [fetchData]);

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser]);
  
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
