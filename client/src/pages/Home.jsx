import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import TransactionHistory from '../components/TransactionHistory';
import Recommended from '../components/Recommended';
import useFetch from '../hooks/useFetch';
import "../assets/styles/home.css";

export default function Home() {
  const [activeContent, setActiveContent] = useState('recommendations');
  const [darkMode, setDarkMode] = useState(false);
  const [user,setUser] = useState();
  

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
		<div className={`home ${darkMode ? "dark-mode" : ""}`}>
			<Navbar darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle} />
			<div className="banner">
				<img
					src="https://distil.in/demo/snappcoins/img/hero_general.jpg"
					alt=""
					className="card-img-top"
				/>
				<div className="wave"></div>
			</div>
			{
				<div className="container py-6">
					<div className="disgrid">
						<div className="ml-1">
							<Card
								gamerName="{user.userName}"
								walletMoney="{user.walletMoney}"
								memberSince="{user.joiningTime}"
							/>
						</div>
						<div>
							<div className="content mt-4">
								<div
									className="btn-group d-flex"
									role="group"
									aria-label="Content Navigation"
									style={{ borderBottom: "1px solid #ced4da" }}>
									<button
										className={`text-gray font-size-lg hg ${
											activeContent === "recommendations" ? "active" : ""
										}`}
										onClick={handleRecommendationsClick}
										style={{
											border: "none",
											borderBottom:
												activeContent === "recommendations"
													? "1px solid #000000"
													: "none",
											marginRight: "15px",
											padding: "15px",
											paddingBottom: "0.5rem",
											background: "transparent",
										}}>
										Recommended
									</button>
									<button
										className={`text-gray font-size-lg hg ${
											activeContent === "transactionHistory" ? "active" : ""
										}`}
										onClick={handleTransactionHistoryClick}
										style={{
											border: "none",
											borderBottom:
												activeContent === "transactionHistory"
													? "1px solid #000000"
													: "none",
											marginRight: "15px",
											padding: "15px",
											paddingBottom: "0.5rem",
											background: "transparent",
										}}>
										Transaction History
									</button>
								</div>

								<div className="mt-4">
									{activeContent === "recommendations" && (
										<div className="mb-4">
											<Recommended />
										</div>
									)}
									{activeContent === "transactionHistory" && (
										<div className="mb-4">
											<TransactionHistory />
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			}
			<Footer darkMode={darkMode} />
		</div>
	);
}
