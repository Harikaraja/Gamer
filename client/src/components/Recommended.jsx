import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Recommended() {
	const [isLiked, setIsLiked] = useState(false);

	const handleLikeClick = () => {
		setIsLiked(!isLiked);
	};

  
  return (
		<div className="items-cont">
			<div className="item">
				<div className="card" style={{ zIndex: "2", padding: "0px" }}>
					<div
						className="image-container"
						style={{
							position: "relative",
							height: "75%",
							backgroundImage: "linear-gradient(to bottom, #e8e8e8, #d3d3d3)",
							overflow: "hidden",
						}}>
						<img
							src="https://distil.in/demo/snappcoins/img/items/item-1.jpg"
							alt=""
							className="zoom-image"
						/>
						<div className="badge">
							<span className="badge-text">3.25 snaps</span>
						</div>
						<div
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								width: "100%",
								height: "25%",
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
								zIndex: 1,
							}}></div>
						<button className="snap-button">Snapp Now</button>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							height: "50px",
							padding: "20px",
						}}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<img
								src="path/to/icon.png"
								alt="Icon"
								style={{ width: "20px", height: "20px", marginRight: "5px" }}
							/>
							<span>JBL PODS</span>
						</div>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginLeft: "auto",
							}}>
							<FontAwesomeIcon
								icon={faHeart}
								style={{
									color: isLiked ? "#D63384" : "grey",
									cursor: "pointer",
								}}
								onClick={handleLikeClick}
							/>
							<span style={{ marginLeft: "5px" }}>50</span>
						</div>
					</div>
				</div>
			</div>
			<div className="item">
				<div className="card" style={{ zIndex: "2", padding: "0px" }}>
					<div
						className="image-container"
						style={{
							position: "relative",
							height: "75%",
							backgroundImage: "linear-gradient(to bottom, #e8e8e8, #d3d3d3)",
							overflow: "hidden",
						}}>
						<img
							src="https://distil.in/demo/snappcoins/img/items/item-1.jpg"
							alt=""
							className="zoom-image"
						/>
						<div className="badge">
							<span className="badge-text">3.25 snaps</span>
						</div>
						<div
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								width: "100%",
								height: "25%",
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
								zIndex: 1,
							}}></div>
						<button className="snap-button">Snapp Now</button>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							height: "50px",
							padding: "20px",
						}}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<img
								src="path/to/icon.png"
								alt="Icon"
								style={{ width: "20px", height: "20px", marginRight: "5px" }}
							/>
							<span>JBL PODS</span>
						</div>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginLeft: "auto",
							}}>
							<FontAwesomeIcon
								icon={faHeart}
								style={{
									color: isLiked ? "#D63384" : "grey",
									cursor: "pointer",
								}}
								onClick={handleLikeClick}
							/>
							<span style={{ marginLeft: "5px" }}>50</span>
						</div>
					</div>
				</div>
			</div>
			<div className="item">
				<div className="card" style={{ zIndex: "2", padding: "0px" }}>
					<div
						className="image-container"
						style={{
							position: "relative",
							height: "75%",
							backgroundImage: "linear-gradient(to bottom, #e8e8e8, #d3d3d3)",
							overflow: "hidden",
						}}>
						<img
							src="https://distil.in/demo/snappcoins/img/items/item-1.jpg"
							alt=""
							className="zoom-image"
						/>
						<div className="badge">
							<span className="badge-text">3.25 snaps</span>
						</div>
						<div
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								width: "100%",
								height: "25%",
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
								zIndex: 1,
							}}></div>
						<button className="snap-button">Snapp Now</button>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							height: "50px",
							padding: "20px",
						}}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<img
								src="path/to/icon.png"
								alt="Icon"
								style={{ width: "20px", height: "20px", marginRight: "5px" }}
							/>
							<span>JBL PODS</span>
						</div>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginLeft: "auto",
							}}>
							<FontAwesomeIcon
								icon={faHeart}
								style={{
									color: isLiked ? "#D63384" : "grey",
									cursor: "pointer",
								}}
								onClick={handleLikeClick}
							/>
							<span style={{ marginLeft: "5px" }}>50</span>
						</div>
					</div>
				</div>
			</div>

			<div className="item">
				<div className="card" style={{ zIndex: "2", padding: "0px" }}>
					<div
						className="image-container"
						style={{
							position: "relative",
							height: "75%",
							backgroundImage: "linear-gradient(to bottom, #e8e8e8, #d3d3d3)",
							overflow: "hidden",
						}}>
						<img
							src="https://distil.in/demo/snappcoins/img/items/item-1.jpg"
							alt=""
							className="zoom-image"
						/>
						<div className="badge">
							<span className="badge-text">3.25 snaps</span>
						</div>
						<div
							style={{
								position: "absolute",
								bottom: 0,
								left: 0,
								width: "100%",
								height: "25%",
								background:
									"linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
								zIndex: 1,
							}}></div>
						<button className="snap-button">Snapp Now</button>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							height: "50px",
							padding: "20px",
						}}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<img
								src="path/to/icon.png"
								alt="Icon"
								style={{ width: "20px", height: "20px", marginRight: "5px" }}
							/>
							<span>JBL PODS</span>
						</div>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginLeft: "auto",
							}}>
							<FontAwesomeIcon
								icon={faHeart}
								style={{
									color: isLiked ? "#D63384" : "grey",
									cursor: "pointer",
								}}
								onClick={handleLikeClick}
							/>
							<span style={{ marginLeft: "5px" }}>50</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
