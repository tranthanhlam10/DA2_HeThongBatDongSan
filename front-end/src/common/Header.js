import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import mail from "../assets/mail.png";
import iphone from "../assets/iphone.png";
import heart from "../assets/heart.png";
const navbarItems = [
  {
    displayName: "Nhà đất bán",
    link: "",
    dropDownItems: [
      {
        displayName: "Bán căn hộ chung cư",
        link: "",
      },
      {
        displayName: "Bán nhà riêng, nhà mặt phố",
        link: "",
      },
      {
        displayName: "Bán biệt thự, nhà liền kề",
        link: "",
      },
      {
        displayName: "Bán đất nền",
        link: "",
      },
      {
        displayName: "Bán đất thổ cư",
        link: "",
      },
      {
        displayName: "Bán tòa nhà văn phòng",
        link: "",
      },
      {
        displayName: "Bán căn hộ CONDOTEL",
        link: "",
      },
      {
        displayName: "Bán đất trang trại, nghỉ dưỡng",
        link: "",
      },
      {
        displayName: "Bán kho, nhà xưởng, kiot",
        link: "",
      },
      {
        displayName: "Bán nhà đất khác",
        link: "",
      },
    ],
  },
  {
    displayName: "Nhà đất cho thuê",
    link: "",
    dropDownItems: [
      {
        displayName: "Cho thuê căn hộ chung cư",
        link: "",
      },
      {
        displayName: "Cho thuê phòng trọ, nhà trọ",
        link: "",
      },
      {
        displayName: "Cho thuê văn phòng",
        link: "",
      },
      {
        displayName: "Cho thuê nhà riêng, nhà mặt phố",
        link: "",
      },
      {
        displayName: "Cho thuê căn hộ CONDOTEL",
        link: "",
      },
      {
        displayName: "Cho thuê căn hộ OFICETEL",
        link: "",
      },
      {
        displayName: "Cho thuê cửa hàng, kiot",
        link: "",
      },
      {
        displayName: "Cho thuê kho, nhà xưởng",
        link: "",
      },
      {
        displayName: "Cho thuê nhà đất khác",
        link: "",
      },
    ],
  },
  {
    displayName: "Phòng họp",
    link: "",
    dropDownItems: [],
  },
  {
    displayName: "Tin tức",
    link: "",
    dropDownItems: [],
  },
  {
    displayName: "Thông tin",
    link: "",
    dropDownItems: [],
  },
  {
    displayName: "Liên hệ",
    link: "",
    dropDownItems: [],
  },
];

export default function Header() {
  return (
    <div classname="header-info-container">
      <div className="navbar-info">
        <ul className="info-left">
          <li className="info-left-first">
            <span class="material-icons info-left-icon">
              email
            </span>
            <a href="batdongsan@gmail.com">batdongsan@gmail.com</a>
          </li>
          <li>
            <span class="material-icons info-left-icon">
              phone_in_talk
            </span>
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
            <Link to="" classname="heart-icon">
              <img src={heart} alt="heart" />
            </Link>
          </li>
          <li className="navbar-createFeed">
            <span className="material-icons">add</span>
            <Link>Đăng tin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
