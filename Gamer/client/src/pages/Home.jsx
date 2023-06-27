import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import TransactionHistory from '../components/TransactionHistory';
import Recommended from '../components/Recommended';
import useFetch from '../hooks/useFetch';
import "../assets/styles/home.css";
import { useDispatch } from 'react-redux';
import { gamerProfile } from '../redux/actions/gamerAction';

export default function Home() {
  
  const [activeContent, setActiveContent] = useState('recommendations');
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState();
  const [merchant, setMerchant] = useState();
  const [transactions, setTransactions] = useState([]); // Initialize with null or an empty array
  const [searchKeyword, setSearchKeyword] = useState('');

  //console.log("transaction is : ".transactions)
  const token = localStorage.getItem('token');
  const fetchData = useFetch();

  const dispatch = useDispatch()

  const fetchUser = useCallback(() => {
    const config = { url: "/profile", method: "get", headers: { Authorization: token } };
    fetchData(config, { showSuccessToast: false })
      .then(data => {
        setUser(data.user)
        dispatch(gamerProfile(data.user))
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchData, token,dispatch]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const fetchMerchandise = useCallback(() => {
    const config = { url: '/merchant/display', method: "get", headers: { Authorization: token } };
    fetchData(config, { showSuccessToast: false })
      .then(data => setMerchant(data.merchant))
      .catch((err) => {
        console.log(err);
      });
  }, [fetchData, token]);

  useEffect(() => {
    fetchMerchandise();
  }, [fetchMerchandise]);

  const fetchTransactions = useCallback(() => {
    const config = { url: '/transaction/displayItems', method: "get", headers: { Authorization: token } };
    fetchData(config, { showSuccessToast: false })
      .then(data => 
         setTransactions(data.transactions)
         //console.log("data: ",data)
         )
      .catch((err) => {
        console.log(err);
      });
  }, [fetchData, token]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

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
      {user && (
        <Navbar
          darkMode={darkMode}
          onDarkModeToggle={handleDarkModeToggle}
          gamerName={user.userName}
          walletMoney={user.walletMoney}
          memberSince={user.joiningTime}
        />
      )}
      <div className="banner">
        <img src="https://distil.in/demo/snappcoins/img/hero_general.jpg" alt="" className="card-img-top w-100" style={{ height: "275px" }} />
      </div>

      <div className="container py-5">
        <div className="row">
          {user && (
            <div className="col-md-6">
              <Card
                gamerName={user.userName}
                walletMoney={user.walletMoney}
                memberSince={user.joiningTime}
              />
            </div>
          )}
          <div className="col-md-6" style={{ marginLeft: "-20em" }}>
            <div className="content mt-4">
              <div className="btn-group d-flex" role="group" aria-label="Content Navigation">
                <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'recommendations' ? 'active' : ''}`} onClick={handleRecommendationsClick} style={{ border: "none" }}>
                  Recommended
                </button>
                <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'transactionHistory' ? 'active' : ''}`} onClick={handleTransactionHistoryClick}>
                  Transaction History
                </button>
              </div>

              <div className="mt-4">
                <div className="mb-4">
                  <div className="row">
                    {merchant &&
                      activeContent === 'recommendations' &&
                      merchant.map((product, index) => (
                        <div key={index} className="col-md-6 col-lg-5 mb-3">
                          <Recommended
                            title={product.title}
                            desc={product.description}
                            brand={product.brand}
                            price={product.price}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                {transactions !== null && activeContent === 'transactionHistory' && (
              <div className="d-flex justify-content-center mb-4">
                <input
                  className="form-control me-2 w-100 bg-white text-dark"
                  type="search"
                  placeholder="Search here..."
                  aria-label="Search"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)} style={{width:'20px'}}
                />
                <button className="btn text-white bg-danger inside">Search</button>
              </div>
            )}

            {transactions !== null && activeContent === 'transactionHistory' &&
              transactions
                .filter((transaction) => {
                  if (searchKeyword === '') return true;
                  return transaction.orderStatus.toLowerCase().includes(searchKeyword.toLowerCase());
                })
                .map((transaction, index) => (
                  <TransactionHistory
                    key={index}
                    tdate={transaction.transactionDate}
                    tId={transaction.transactionId}
                    status={transaction.orderStatus}
                  />
                ))
            }

                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}