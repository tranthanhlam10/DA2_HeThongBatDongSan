import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
const navbarItems = [
  {
    displayName: "Nhà đất bán",
    link: "/searchinglist",
    dropDownItems: [
      {
        displayName: "Bán căn hộ chung cư",
        link: "/searchinglist",
      },
      {
        displayName: "Bán nhà riêng, nhà mặt phố",
        link: "/searchinglist",
      },
      {
        displayName: "Bán biệt thự, nhà liền kề",
        link: "/searchinglist",
      },
      {
        displayName: "Bán đất nền",
        link: "/searchinglist",
      },
      {
        displayName: "Bán đất thổ cư",
        link: "/searchinglist",
      },
      {
        displayName: "Bán tòa nhà văn phòng",
        link: "/searchinglist",
      },
      {
        displayName: "Bán căn hộ CONDOTEL",
        link: "/searchinglist",
      },
      {
        displayName: "Bán đất trang trại, nghỉ dưỡng",
        link: "/searchinglist",
      },
      {
        displayName: "Bán kho, nhà xưởng, kiot",
        link: "/searchinglist",
      },
      {
        displayName: "Bán nhà đất khác",
        link: "/searchinglist",
      },
    ],
  },
  {
    displayName: "Nhà đất cho thuê",
    link: "/searchinglist",
    dropDownItems: [
      {
        displayName: "Cho thuê căn hộ chung cư",
        link: "/searchinglist",
      },
      {
        displayName: "Cho thuê phòng trọ, nhà trọ",
        link: "/searchinglist",
      },
      {
        displayName: "Cho thuê văn phòng",
        link: "/searchinglist",
      },
      {
        displayName: "Cho thuê nhà riêng, nhà mặt phố",
        link: "/searchinglist",
      },
      {
        displayName: "Cho thuê căn hộ CONDOTEL",
        link: "/searchinglist",
      },
      {
        displayName: "Cho thuê căn hộ OFICETEL",
        link: "/searchinglist",
      },
      {
        displayName: "Cho thuê cửa hàng, kiot",
        link: "/searchinglist",
      },
      {
        displayName: "Cho thuê kho, nhà xưởng",
        link: "/searchinglist",
      },
      {
        displayName: "Cho thuê nhà đất khác",
        link: "/searchinglist",
      },
    ],
  },
  {
    displayName: "Phòng họp",
    link: "/searchinglist",
    dropDownItems: [],
  },
  {
    displayName: "Tin tức",
    link: "/searchinglist",
    dropDownItems: [],
  },
  {
    displayName: "Thông tin",
    link: "/searchinglist",
    dropDownItems: [],
  },
  {
    displayName: "Liên hệ",
    link: "/searchinglist",
    dropDownItems: [],
  },
];

export default function Header() {
  return (
    <div classname="header-info-container">
      <div className="navbar-info">
        <ul className="info-left">
          <li className="info-left-first">
            <span class="material-icons info-left-icon">email</span>
            <a href="batdongsan@gmail.com">batdongsan@gmail.com</a>
          </li>
          <li>
            <span class="material-icons info-left-icon">phone_in_talk</span>
            <a href="1800-1800">1800-1800</a>
          </li>
        </ul>
        <ul className="info-right">
          <li>
            <Link to="/login" className="login-btn">
              Đăng nhập
            </Link>
          </li>
          <li>
            <Link to="/register" className="register-btn">
              Đăng kí
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-container">
        <ul className="header-col">
          <li className="logo-container">
            <Link to="/">
              <img src={logo} alt="logo" className="logo-header" />
            </Link>
          </li>
          {navbarItems.map((item, index) => {
            return (
              <li className="header-navbar" key={index}>
                <Link to={item.link} className="navbar-link">
                  {item.displayName}
                </Link>
                <div className="header-line-hover"></div>
                <ul className="navbar-hover-list">
                  {item.dropDownItems.map((item, index) => {
                    return (
                      <li className="navbar-hover-item" key={index}>
                        <Link to={item.link}>{item.displayName}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <ul className="header-col">
          <li>
            <Link to="/wishlist" classname="heart-icon">
              <img src={heart} alt="heart" />
            </Link>
          </li>
          <li className="navbar-createFeed">
            <span className="material-icons">add</span>
            <p>Đăng tin</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
