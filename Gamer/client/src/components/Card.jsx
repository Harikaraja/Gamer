import React from 'react';

const Card = (props) => {

    const dateString = props.memberSince;
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const localDate = date.toLocaleDateString(undefined, options);
    
  return (
		<div>
			<div
				className="card"
				style={{
					height: "max-content",
					marginTop: "-145px",
					marginLeft: "-20px",
					zIndex: "2",
			        
				}}>
				<div className="card-body text-center">
					<img
						src="https://distil.in/demo/snappcoins/img/avatar-user.jpg"
						alt=""
						style={{ height: "110px", width: "110px" }}
					/>
					<div
						style={{
							position: "relative",
							top: "-15px",
							right: "-162px",
							backgroundColor: "#3dbf8c",
							width: "20px",
							height: "20px",
							display: "flex",
							borderRadius: "50%",
							justifyContent: "center",
							alignItems: "center",
							
						}}>
						<span style={{ color: "white", fontSize: "15px" }}>&#10003;</span>
					</div>
					<h1 className="card-text" style={{ fontSize: "24px"}}>
						@{props.gamerName}
					</h1>

					<p className="author_number">
						Ox465d53...9df5{" "}
						<a href="#0">
							<span className="clipboard_symbol">&#128203;</span>
						</a>
					</p>
					<div className="text-container">
						<span
							className="button-like-text text-white"
							style={{ fontSize: "20px", width: "100%", marginTop: "20px" }}>
							{props.walletMoney} Snaps
						</span>
					</div>
					<p
						style={{
							fontSize: "14px",
							color: "#888",
							marginTop: "10px",
							marginBottom: "20px",
						}}>
						<b>Mermber Since {localDate}</b>
					</p>
					<hr />
					<div>
						<div className="bordered-layout disfle">
							<div
								className="bordered-number"
								style={{
									paddingLeft: "5px",
									paddingRight: "5px",
									backgroundColor: "#198754",
									marginTop: "15px",
									display: "inline-block",
									padding: "0.35em 0.65em",
									fontSize: ".65em",
									fontWeight: "700",
									lineHeight: "1",
									color: "#fff",
									textAlign: "center",
									whiteSpace: "nowrap",
									verticalAlign: "baseline",
									borderRadius: "0.25rem",
								}}>
								120
							</div>
							<div className="bordered-label fs">Redeemed</div>
						</div>
						<div className="bordered-layout disfle">
							<div
								className="bordered-number"
								style={{
									paddingLeft: "5px",
									paddingRight: "5px",
									backgroundColor: "#ffc107",
									display: "inline-block",
									padding: "0.35em 0.65em",
									fontSize: ".65em",
									fontWeight: "700",
									lineHeight: "1",
									color: "#fff",
									textAlign: "center",
									whiteSpace: "nowrap",
									verticalAlign: "baseline",
									borderRadius: "0.25rem",
									
								}}>
								{props.inTransitCount} 
							</div>
							<div className="bordered-label text-start fs">Pending Orders</div>
						</div>
					</div>
					<p style={{ fontSize: "14px", marginTop: "20px" , opacity:"0.9" }}><b>Mermber Since {localDate}</b></p>
				</div>
			</div>
		</div>
	);
};

export default Card;