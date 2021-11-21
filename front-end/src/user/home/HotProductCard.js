import React from "react";
import "./HotProductCard.css";
import heart1 from "../../assets/heart1.png";
import share1 from "../../assets/share1.png";
import {Link} from 'react-router-dom'
export default function HotProductCard(props) {
  const { price, name, address, juridical, areainfo, img,link } = props;
  return (
    <div className="hot-card-info-container">
      <Link to={link} className="hot-card-info-link">
        <div className="hot-card-img">
          <img src={img}></img>
        </div>
        <div className="hot-card-info">
          <div className="hot-card-title">
            <p>{name}</p>
          </div>
          <div className="hot-card-detail">
            <div className="con-hot-card">
              <span className="material-icons">local_offer</span>
              <p className="hot-card">{price}</p>
            </div>
            <div className="con-hot-card">
              <span className="material-icons">location_on</span>
              <p className="hot-card">{address}</p>
            </div>
            <div className="con-hot-card">
              <span className="material-icons">gavel</span>
              <p className="hot-card">{juridical}</p>
            </div>
            <div className="con-hot-card">
              <span className="material-icons">layers</span>
              <p className="hot-card">{areainfo}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
