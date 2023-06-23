import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import TransactionHistory from '../components/TransactionHistory';
import Recommended from '../components/Recommended';
import useFetch from '../hooks/useFetch';

export default function Home() {
  const [activeContent, setActiveContent] = useState('recommendations');
  const [darkMode, setDarkMode] = useState(false);
  const [user,setUser] = useState();
  const [merchandise,setMerchandise]=useState();

  const token = localStorage.getItem('token');
  const fetchData = useFetch();

  const fetchUser = useCallback(() => {

    const config = { url: "/profile", method: "get", headers: { Authorization: token } };
    fetchData(config, { showSuccessToast: false })
    .then(data => setUser(data.user))
    .catch((err)=>{ 
      console.log(err)
    });

  } //end of call back function
  , 
  //params
  [fetchData,token]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const fetchMerchandise = useCallback(() => {

    const config = { url: "/display", method: "get"};

    fetchData(config, { showSuccessToast: false })
    .then(data => setMerchandise())
    .catch((err)=>{ 

      console.log(err);

    });

  } //end of call back function
  , 
  //params
  [fetchData]);

  useEffect(() => {   

    fetchMerchandise();

  }, [fetchMerchandise]);

  const handleRecommendationsClick = () => {
    setActiveContent('recommendations');
  };

  const handleTransactionHistoryClick = () => {
    setActiveContent('transactionHistory');
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
      <div className="banner">
        <img src="https://distil.in/demo/snappcoins/img/hero_general.jpg" alt="" className="card-img-top w-100" style={{ height: "275px" }} />
      </div>
      { user && 
          (<div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <Card gamerName = {user.userName}
                      walletMoney = {user.walletMoney}
                      memberSince = {user.joiningTime} />
              </div>
              <div className="col-md-6" style={{marginLeft:"-10em"}}>
                <div className="content mt-4">
                  <div className="btn-group d-flex" role="group" aria-label="Content Navigation">
                    <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'recommendations' ? 'active' : ''}`} onClick={handleRecommendationsClick} style={{border:"none"}}>
                      Recommended 
                    </button>
                    <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'transactionHistory' ? 'active' : ''}`} onClick={handleTransactionHistoryClick}>
                      Transaction History
                    </button>
                  </div>

                  <div className="mt-4">
                    {activeContent === 'recommendations' && (
                      <div className="mb-4">
                        <Recommended />
                      </div>
                    )}
                    {activeContent === 'transactionHistory' && (
                      <div className="mb-4">
                        <TransactionHistory />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>)
      }
      <Footer darkMode={darkMode} />
    </div>
  );
}
