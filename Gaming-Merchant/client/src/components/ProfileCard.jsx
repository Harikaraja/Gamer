import React from 'react'
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
      <div className="my-5 col">
          <div className="card bg-light" style={{ width: "18rem" }}>
            <div className="m-5">
              <img src="avatar1.jpg" className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">@ Junglee Rummy</h5>
              <p className="card-text"></p>
              <div className="card-content">
                <h2 className="content-h2"><span className="badge d-block">
                    4689 
                    <small> snapps</small>
                    </span>
                </h2>
                <Link to="#" className="btn btn-light">
                  <i className="fa-solid fa-file-arrow-up mx-2"></i>Dash Board
                </Link>
                <br />
                <br />
                <Link to="#" className="btn btn-light">
                  <i className="fa-solid fa-gear mx-2"></i>Account Settings
                </Link>
                <br />
                <br />
                <Link to="#" className="btn btn-light">
                  <i className="fa-solid fa-right-from-bracket mx-2"></i>Log out
                </Link>
              </div>
            </div>
          </div>
      </div>
  )
}

export default ProfileCard
