import React from 'react';

export default function TransactionHistory() {
  return (
    <div>
      <div className="d-flex justify-content-center mb-4">
        <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" />
        <button className="btn text-white bg-danger">Search</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li className="transaction-item">
          <div className="d-flex align-items-center">
            <img src="" alt="" className="transaction-image" />
            <div className="transaction-details">
              <p className="transaction-date mb-2">11.08.2022</p>
              <p className="transaction-id mb-2">#ID 20220325</p>
              <p className="transaction-status mb-0">In Transit</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
