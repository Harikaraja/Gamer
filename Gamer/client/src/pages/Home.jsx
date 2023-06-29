import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import TransactionHistory from '../components/TransactionHistory';
import Recommended from '../components/Recommended';
import Pagination from '../components/pagination';
import useFetch from '../hooks/useFetch';
import "../assets/styles/home.css";
import { useDispatch } from 'react-redux';
import { gamerProfile } from '../redux/actions/gamerAction';

export default function Home() {
  const [activeContent, setActiveContent] = useState('recommendations');
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState();
  const [transactions, setTransactions] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [merchant, setMerchant] = useState([]);
  const [perpage, setPerpage] = useState([]);

  const pageHandler = (pageNumber) => {

    const startIndex = (pageNumber - 1) * 3;
    const endIndex = pageNumber * 3;
    console.log(startIndex);
    console.log(endIndex);
    setPerpage(merchant.slice(startIndex, endIndex));
  }

  const token = localStorage.getItem('token');
  const fetchData = useFetch();
  const dispatch = useDispatch();

  const fetchUser = useCallback(() => {
    const config = { url: "/profile", method: "get", headers: { Authorization: token } };
    fetchData(config, { showSuccessToast: false })
      .then(data => {
        setUser(data.user);
        dispatch(gamerProfile(data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchData, token, dispatch]);

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
      .then(data => setTransactions(data.transactions))
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

  useEffect(() => {
    if (activeContent === 'recommendations' && merchant.length > 0) {
      setPerpage(merchant.slice(0, 3));
    }
  }, [activeContent, merchant]);

  

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
            <div className="col-md-3 col-xl-3">
              <Card
                gamerName={user.userName}
                walletMoney={user.walletMoney}
                memberSince={user.joiningTime}
              />
            </div>
          )}
          <div className="col-md-9 col-xl-9" >
            <div className="content mt-4">
              <div className="btn-group d-flex" role="group" aria-label="Content Navigation">
                <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'recommendations' ? 'active' : ''}`} onClick={handleRecommendationsClick} style={{padding:'0px',margin:'0',width:'-2px'}}>
                  Recommended
                </button>
                <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'transactionHistory' ? 'active' : ''}`} onClick={handleTransactionHistoryClick} >
                  Transaction History
                </button>
              </div>

              <div className="mt-4">
                {activeContent === 'recommendations' && perpage.length > 0 ? (
                  <div className="row ">
                    {perpage.map((product, index) => (
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                        <Recommended
                          title={product.title}
                          img={product.image}
                          desc={product.description}
                          brand={product.brand}
                          price={product.price}
                          index={index}
                        />
                      </div>
                    ))}
                    <br />
                    <Pagination data={merchant} pageHandler={pageHandler} />

                  </div>
                ) : (
                  <p></p>
                )
                
                }


              {transactions !== null && activeContent === 'transactionHistory' && (
                <>
                  <div className="d-flex justify-content-center mb-4">
                    <input
                      className="form-control me-2 w-100 bg-white text-dark"
                      type="search"
                      placeholder="Search here..."
                      aria-label="Search"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <button className="btn text-white bg-danger inside">Search</button>
                  </div>

                  {transactions
                    .filter((transaction) => {
                      if (searchKeyword === '') return true;
                      return transaction.orderStatus.toLowerCase().includes(searchKeyword.toLowerCase());
                    })
                    .slice(0, 3) // Display only three transactions
                    .map((transaction, index) => (
                      <TransactionHistory
                        key={index}
                        tdate={transaction.transactionDate}
                        tId={transaction.transactionId}
                        status={transaction.orderStatus}
                      />
                      
                    ))
                    
                    }
                    
                </>
              )}

              </div>
             
            </div>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}
