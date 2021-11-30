import React from "react";
import "./WishCard.css";

export default function WishCard(props) {
  const { img, name, price, area, time, location, link } = props;

  return (
    <div className="wish-card">
      <a href={link} className="wish-card-info">
        <div className="wish-card-image">
          <img src={img}></img>
        </div>
        <div className="wish-card-content">
          <div className="wish-card-name">
            <p>{name}</p>
          </div>
          <div className="wish-card-time">
            <span className="material-icons">schedule</span>
            <p>{time}</p>
          </div>
          <div className="wish-card-price">
            <span className="material-icons">attach_money</span>
            <p>{price}</p>
          </div>
          <div className="wish-detail">
            <div className="wish-card-area">
              <span className="material-icons">home_work</span>
              <p>Diện tích: {area}</p>
            </div>
            <div className="wish-card-location">
              <span className="material-icons">location_on</span>
              <p>Địa điểm: {location}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
