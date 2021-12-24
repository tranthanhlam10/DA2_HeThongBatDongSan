import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import { connect } from "react-redux";
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
const avatarLoginSucessful = (
  <Link to="/userinfo" className="header-avatar-container">
    <div className="avatar">
      <img src="https://64.media.tumblr.com/ab8f387b3e4d08d3a517b1f7766ace2b/tumblr_p4bm0eQ05h1wzkv79o1_1280.jpg" />
    </div>
    <span>Lương Duy Bảo</span>
  </Link>
);
function Header(props) {
  return (
    <div classname="header-info-container">
      <div className="navbar-info">
        <ul className="info-left">
          <li className="info-left-first">
            <span class="material-icons info-left-icon">email</span>
            <span>batdongsan@gmail.com</span>
          </li>
          <li>
            <span class="material-icons info-left-icon">phone_in_talk</span>
            <span>1800-1800</span>
          </li>
        </ul>
        <ul className="info-right">
          <li className="login-btn-container">
            <a href="/login">
              {props.isLogin ? avatarLoginSucessful : "Đăng nhập"}
            </a>
          </li>
          <li>
            <a href="register" className="register-btn">
              Đăng kí
            </a>
          </li>
        </ul>
      </div>
      <div className="header-container">
        <ul className="header-col">
          <li className="logo-container">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="logo-header"
                height="70px"
                width="100px"
              />
            </Link>
          </li>
          {navbarItems.map((item, index) => {
            return (
              <li className="header-navbar" key={index}>
                <Link to={item.link} className="navbar-link">
                  {item.displayName}
                  <div className="header-line-hover"></div>
                </Link>

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
          <li className="header-heart-icon-container">
            <Link to="/wishlist" className="heart-icon">
              <img src={heart} alt="heart" />
            </Link>
            <div className="header-tooltip-container">
              <div className="header-tooltip-content">
                Danh sách tin đăng đã lưu
                <span className="header-top-delta"></span>
              </div>
            </div>
            {props.numberCart === 0 ? (
              ""
            ) : (
              <div className="num-of-wishlist">{props.numberCart}</div>
            )}
          </li>
          <li style={{ "display": props.isLogin ? "block" : "none" }}>
            <Link to="/post" className="navbar-createFeed post-btn">
              <span className="material-icons">add</span>
              <p>Đăng tin</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLogin: state._todoProduct.isLogin,
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(Header);
