import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className="card" style={{ height: "450px", marginTop: "-145px", marginLeft: "-20px", zIndex: "2" }}>
        <div className="card-body text-center">
          <img src='https://distil.in/demo/snappcoins/img/avatar-user.jpg' alt='' style={{ height: "100px", width: "100px" }} />
          <h1 className="card-text" style={{ fontSize: "24px", marginTop: "10px" }}>@{props.name}</h1>
          <div className="text-container">
            <span className="button-like-text text-white" style={{ fontSize: "20px" }}>{props.snapps} Snapps</span>
          </div>
          <p style={{ fontSize: "14px", color: "#888" }}>Member since March 28, 2023</p>
          <hr />
          <div>
            <div className="bordered-layout">
              <div className="bordered-number" style={{ fontSize: "20px" ,color: "green"}}>{props.redeemed}</div>
              <div className="bordered-label">Redeemed</div>
            </div>
            <div className="bordered-layout">
              <div className="bordered-number" style={{ fontSize: "20px",color: "yellow" }}>{props.pendingOrders}</div>
              <div className="bordered-label text-start">Pending Orders</div>
            </div>
          </div>
          <p style={{ fontSize: "14px", marginTop: "20px" }}>Member since March 28, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
