import React from "react";
import "./Home.css";
import HomeCarouselOwl from "./RealEstateHotList";
import ReAdsProduct from "./ReAdsProduct";
import HomeSearchBar from "./HomeSearchBar";
import { Link } from "react-router-dom";
import RePlace from "./RePlace";
import FooterMiddle from './FooterMiddle';
export default function Home() {
  return (
    <div className="home-container">
      <HomeSearchBar />
      <div className="home-container-center">
        <div className="home-content">
          <div className="projectTitle-container">
            <div className="title">DỰ ÁN NỔI BẬT</div>
            <p className="description">
              Tổng hợp danh sách các dự án Bất động sản nổi bật mới nhất. Thông
              tin chi tiết về giá bán, vị trí, chính sách ưu đãi sẽ được cập nhật
              liên tục tại BatDongSan.
            </p>
          </div>
          <HomeCarouselOwl />
          <div className="more-product">
            <button className="button-more-product">
              <Link to="/searchinglist"> Xem tất cả dự án</Link>
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
          <ReAdsProduct />
          <RePlace />
          <FooterMiddle />
        </div>
      </div>
    </div>
  );
}
