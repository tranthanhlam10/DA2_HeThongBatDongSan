import React, { useState } from "react";
import "./HomeSearchBar.css";
import { Link, useHistory } from "react-router-dom";
import HomeOption from "./HomeOption";
import loading1 from '../../assets/loading1.gif'
import Loading from '../../common/Loading'

const TypeHomeOption = [
  {
    type: "Hồ Chí Minh",
  },
  {
    type: "Hà Nội",
  },
  {
    type: "Bình Dương",
  },
];

const PriceHomeOption = [
  {
    price: "Dưới 500 triệu",
  },
  {
    price: "1 Tỷ",
  },
  {
    price: "2 Tỷ",
  },
];

const SquareHomeOption = [
  {
    square: "Dưới 30 m2",
  },
  {
    square: " 30 m2",
  },
  {
    square: " 50 m2",
  },
];

const ProjectHomeOption = [
  {
    project: "Vinhome",
  },
];


export default function HomeSearchBar() {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const handleLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      history.push('/searchinglist')
    }, 3000)
  }
  const searchBtn = <button className="button-search" onClick={() => handleLoading()}>
    <span className="material-icons">search</span>
    <i className="icon-search"></i>
    <span>Tìm kiếm</span>
  </button>

  const loading = <button className="button-search">
    {<Loading />}
  </button>




  return (
    <div className="search-banner">
      <iframe
        src="https://cdn.houseviet.vn/banner/HouseViet/index.html?v=1.1.1%22"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <div className="search-tab-form">
        <div className="search-tab">
          <div className="search-tab-buying">Nhà đất bán</div>
          <div className="search-tab-rent">Nhà đất cho thuê</div>
        </div>
        <div className="search-form">
          <div className="searching-bar">
            <div className="option-box">Loại bất động sản</div>
            <div className="option-label">
              <span className="material-icons">expand_more</span>
            </div>
            <div className="option-icon">
              <Link></Link>
            </div>
            <div className="option-search">
              <Link></Link>
            </div>
            <input
              className="search-input"
              placeholder="Nhập địa điểm hoặc dự án"
            ></input>
            {isLoading ? loading : searchBtn}
          </div>

          <div className="searching-option">
            <div className="home-searchbar-option">
              <span>Toàn quốc</span>
              <span className="material-icons">expand_more</span>
            </div>
            <div className="home-searchbar-option">
              <span>Mức giá</span>
              <span className="material-icons">expand_more</span>
            </div>
            <div className="home-searchbar-option">
              <span>Diện tích</span>
              <span className="material-icons">expand_more</span>
            </div>
            <div className="home-searchbar-option">
              <span>Dự án</span>
              <span className="material-icons">expand_more</span>
            </div>
            <div className="home-searchbar-option">
              <span>Lọc thêm</span>
              <span className="material-icons">filter_list</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
