import React from 'react';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import icon from '../assets/images/icon.png';

export default function Recommended(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
      // Assuming you receive the image URL from props
      setImageSrc(
        props.img
          ? `${process.env.REACT_APP_URL}/api/merchant/img/${props.img}`
          : "default-prod.png"
      );
  }, [props.img]);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="items-cont">
    
    <div className='img-fluid'>
      {/* item begins here */}
      <div className="item">
        <div className="card" style={{ zIndex: "2", padding: "0px" }}>
          <div
            className="image-container"
            style={{
              position: "relative",
              height: "75%",
              backgroundImage: "linear-gradient(to bottom, #e8e8e8, #d3d3d3)",
              overflow: "hidden",
            }}
          >
                    <figure>
                        {!imageLoaded && <div className="loading-spinner"></div>}
                        <img
                        src={imageSrc}
                        data-src="img/items/item-4.jpg"
                        className={`lazy ${imageLoaded ? "" : "hidden"}`}
                        alt=""
                        height="50px"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                        />
                    </figure>
            <div className="badge">
              <span className="badge-text">{props.price} snaps</span>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "25%",
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
                zIndex: 1,
              }}
            ></div>
            <button className="snap-button">Snapp Now</button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "50px",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={icon}
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
              }}
            >
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
    </div>
  );
}
