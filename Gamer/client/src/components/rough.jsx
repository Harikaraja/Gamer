import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import TransactionHistory from '../components/TransactionHistory';
import Recommended from '../components/Recommended';
import Pagination from '../components/pagination';
import MyItems from '../components/myItems';
import useFetch from '../hooks/useFetch';
import "../assets/styles/home.css";
import { useDispatch } from 'react-redux';
import { gamerProfile } from '../redux/actions/gamerAction';

export default function Home() {


  const [activeContent, setActiveContent] = useState('recommendations');
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState();
  const [transactions, setTransactions] = useState([]);
  const [snaphistory,setSnaphistory] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [merchant, setMerchant] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [inTransitCount, setInTransitCount] = useState(0);
  const [currentPageTransactions, setCurrentPageTransactions] = useState([]);

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

  const fetchhistory = useCallback(() => {
    const config = { url: '/transaction/displayItems', method: "get", headers: { Authorization: token } };
    fetchData(config, { showSuccessToast: false })
      .then(data => {
        console.log("data: ", data);
        setSnaphistory(data.transactions); // Set the retrieved data to the snaphistory state
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchData, token]);
  

  useEffect(() => {
    fetchhistory();
  }, [fetchhistory]);

  useEffect(() => {
    const count = transactions.filter(transaction => transaction.orderStatus === 'In Transit').length;
    setInTransitCount(count);
  }, [transactions]);

  const handleRecommendationsClick = () => {
    setActiveContent('recommendations');
  };

  const handleTransactionHistoryClick = () => {
    setActiveContent('transactionHistory');
  };

  const handlesnapHistoryClick = () => {
    setActiveContent('snaphistory');
  };
  

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (activeContent === 'recommendations' && merchant.length > 0) {
      setCurrentPage(1);
    }
  }, [activeContent, merchant]);

  useEffect(() => {
    if (activeContent === 'transactionHistory' && transactions.length > 0) {
      setCurrentPage(1);
    }
  }, [activeContent, transactions]);

  useEffect(() => {
    if (activeContent === 'snaphistory' && snaphistory.length > 0) {
      setCurrentPage(1);
    }
  }, [activeContent, snaphistory]);

  const pageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    if (activeContent === 'recommendations') {
      setCurrentPageTransactions(merchant.slice(startIndex, endIndex));
    } else if (activeContent === 'transactionHistory') {
      setCurrentPageTransactions(transactions.slice(startIndex, endIndex));
    } else if (activeContent === 'snaphistory') {
      setCurrentPageTransactions(snaphistory.slice(startIndex, endIndex));
    }
  }, [currentPage, itemsPerPage, activeContent, merchant, transactions, snaphistory]);
  
  return (
    <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
      {/*{user && (
        <Navbar
          darkMode={darkMode}
          onDarkModeToggle={handleDarkModeToggle}
          gamerName={user.userName}
          walletMoney={user.walletMoney}
          memberSince={user.joiningTime}
        />
      )}*/}
      <Navbar
          darkMode={darkMode}
          onDarkModeToggle={handleDarkModeToggle}/>
      <div className="banner">
        <img src="https://distil.in/demo/snappcoins/img/hero_general.jpg" alt="" className="card-img-top w-100" style={{ height: "275px" }} />
      </div>

      <div className="container-fluid py-5 px-5 mx-5 " >
        <div className="row">
          {user && (
            <div className="col-md-3 col-xl-3">
              <Card
                gamerName={user.userName}
                walletMoney={user.walletMoney}
                memberSince={user.joiningTime}
                inTransitCount={inTransitCount}
              />
            </div>
          )}
          
          <div className="col-md-9 col-xl-9">
            <div className="content mt-4">
          
              <div  role="group" aria-label="Content Navigation">
                <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'recommendations' ? 'active' : ''}`} onClick={handleRecommendationsClick} 
                style={{
                    border: "none",
                    textDecoration: "none",
                    boxShadow: "none",
                    position: "relative",
                  }}
>
                  Recommended
                  {activeContent === "recommendations" && (
                    <span
                      className="active-line"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: darkMode ? "white" : "black",
                      }}
                    />
                  )}
                </button>
                <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'transactionHistory' ? 'active' : ''}`} onClick={handleTransactionHistoryClick} 
                 style={{
                  border: "none",
                  textDecoration: "none",
                  boxShadow: "none",
                  position: "relative",
                }}

                >
                  Transaction History
                  {activeContent === "transactionHistory" && (
                    <span
                      className="active-line"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: darkMode ? "white" : "black",
                      }}
                    />
                  )}
                </button>
                <button className={`btn btn-link text-gray font-size-lg ${activeContent === 'snaphistory' ? 'active' : ''}`} onClick={handlesnapHistoryClick} 
                style={{
                    border: "none",
                    textDecoration: "none",
                    boxShadow: "none",
                    position: "relative",
                  }}
>
                  Snap History
                  {activeContent === "snaphistory" && (
                    <span
                      className="active-line"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: darkMode ? "white" : "black",
                      }}
                    />
                  )}
                </button>
                <div className="separator-container"></div>
                <div className="separator"></div>

              </div>
              

              <div className="mt-4" >
                {activeContent === 'recommendations' && (
                    <span
                      className="active-line"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: darkMode ? "white" : "black",
                      }}
                    />
                  ) && currentPageTransactions.length > 0 ? (
                  <div className="row">
                    {currentPageTransactions.map((product, index) => (
                      <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12' key={index}>
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
                  </div>
                ) : activeContent === 'transactionHistory' && (
                  <span
                    className="active-line"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: darkMode ? "white" : "black",
                    }}
                  />
                )&& currentPageTransactions.length > 0 ? (
                  <>
                    <div className="d-flex justify-content-center mb-4 col-9">
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

                    {currentPageTransactions
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
                      ))}
                  </>
                ) : activeContent === 'snaphistory' && (
                  <span
                    className="active-line"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: darkMode ? "white" : "black",
                    }}
                  />
                )&& currentPageTransactions.length > 0 ? (
                  <>
                  <div className="d-flex justify-content-center mb-4 col-9" >
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
                  <div className="snap-history" style={{display:'flex', flexDirection:'row'}}>

                  {currentPageTransactions
                    .filter((transaction) => {
                      if (searchKeyword === '') return true;
                      return transaction.orderStatus.toLowerCase().includes(searchKeyword.toLowerCase());
                    })
                    .map((transaction, index) => (
                      <MyItems  key={index}
                      tdate={transaction.transactionDate}
                      tId={transaction.transactionId}
                      status={transaction.orderStatus}/>
                      
                      ))}
                      </div>
                </>
                ) :(
                  <>
                  <p>no products</p>
                  </>
                )
                
                }

              </div>

              <Pagination
                data={activeContent === 'recommendations' ? merchant : transactions}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={pageHandler}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}