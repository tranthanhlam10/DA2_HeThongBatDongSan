import React from "react";
import "./ReAdsCard.css";
import heart1 from "../../assets/heart1.png";
import share1 from "../../assets/share1.png";
import {Link} from "react-router-dom"
export default function ReAdsCard(props) {
  const { price, name, address, time, areainfo, img } = props;
  return (
    <div className="ads-card-info-container">
      <div className="ads-card-info-link">
       <a href={props.link}>
       <div className="ads-card-img">
          <img src={img}></img>
        </div>
       </a>
        <div className="ads-card-info">
          <div className="ads-card-title">
            <a href={props.link}>{name}</a>
            <div className="ads-card-title-icon-container">
              <div className="ads-card-icon-heart">
                <img src={heart1} />
              </div>
              <div className="ads-card-icon-share">
                <img src={share1} />
              </div>
            </div>
          </div>

          <div className="ads-card-detail">
            <div className="ads-price-area">
              <div className="ads-hot-card-price">
                <span className="material-icons">paid</span>
                <p className="ads-card-price">{price}</p>
              </div>
              <div className="ads-hot-card-area">
                <span className="material-icons">layers</span>
                <p className="ads-card-area">{areainfo}</p>
              </div>
            </div>
            <div className="ads-address-time">
              <div className="ads-hot-card-address">
                <span className="material-icons">location_on</span>
                <p className="ads-card-address">{address}</p>
              </div>
              <div className="ads-hot-card-time">
                <span className="material-icons">watch_later</span>
                <p className="ads-card-time">{time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
