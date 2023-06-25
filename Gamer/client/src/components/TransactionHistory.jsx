import React from 'react';
import '../assets/styles/transaction.css';
import bg from '../assets/images/blog.jpg'
export default function TransactionHistory() {
  return (
		<div>
			<div className="d-flex justify-content-center mb-4">
				<input
					className="form-control me-2 w-100 bg-white text-dark"
					type="search"
					placeholder="Search in here..."
					aria-label="Search"
				/>
				<button className="btn text-white bg-danger inside">Search</button>
			</div>
			<ul style={{ listStyle: "none", padding: 0, marginLeft: "30px" }}>
				{/* Item starts here */}
				<li className="transaction-item">
					<div className="d-flex align-items-center">
						<img src={bg} alt="" className="transaction-image" />
						<div className="transaction-details">
							<p className="transaction-date">11.08.2022</p>
							<p className="transaction-id">#ID 20220325</p>
							<p className="transaction-status bgy mb-0">In Transit</p>
						</div>
					</div>
				</li>

				
			</ul>
		</div>
	);
}