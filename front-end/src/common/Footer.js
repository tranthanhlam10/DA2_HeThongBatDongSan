import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import certification from "../assets/certification.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import send from "../assets/send.png";
import { Link } from "react-router-dom";
const connects = [
  {
    name: "twitter",
    img: twitter,
    link: "", //thêm link twitter ở đây
  },
  {
    name: "facebook",
    img: facebook,
    link: "", //thêm link fb ở đây
  },
  {
    name: "instagram",
    img: instagram,
    link: "", //thêm link insta ở đây
  },
];
const footerCols = [
  {
    title: "Công ty",
    items: [
      {
        name: "Về công ty",
        link: "",
      },
      {
        name: "Quy chế hoạt động",
        link: "",
      },
      {
        name: "Liên hệ",
        link: "",
      },
      {
        name: "Sitemap",
        link: "",
      },
      {
        name: "Tuyển dụng",
        link: "",
      },
    ],
  },
  {
    title: "Quy định",
    items: [
      {
        name: "Quy định đăng tin",
        link: "",
      },
      {
        name: "Điều khoản thỏa thuận",
        link: "",
      },
      {
        name: "Chính sách bảo mật",
        link: "",
      },
      {
        name: "Giải quyết thiếu nại",
        link: "",
      },
      {
        name: "Góp ý báo lỗi",
        link: "",
      },
    ],
  },
];
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-center">
          <div className="footer-logo">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="logo"
                height="70px"
                width="100px"
              />
            </Link>
          </div>
          <div className="footer-info">
            <ul className="footer-column-first">
              <p className="footer-title">
                CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN VIỆT NAM
              </p>
              <li className="footer-item">
                <img src={location} className="footer-icon" />
                <span>
                  Đường Hàn Thuyên Khu phố 6, Thành phố <br /> Thủ Đức, Thành
                  phố Hồ Chí Minh
                </span>
              </li>
              <li className="footer-item">
                <img src={phone} className="footer-icon" />
                <span>Holine: 0984657443</span>
              </li>
              <li>
                <Link to="">
                  <img src={certification} alt="logo1" />
                </Link>
              </li>
            </ul>
            {footerCols.map((item, index) => {
              return (
                <ul key={index}>
                  <p className="footer-title">{item.title}</p>
                  {item.items.map((item, index) => {
                    return (
                      <li className="footer-item" key={index}>
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}

            <ul className="footer-col-last">
              <div>
                <p className="footer-title">Đăng kí nhận tin</p>
                <form action="" className="footer-form">
                  <input type="text" placeholder="Nhập email của bạn"></input>
                  <button>
                    <img src={send} alt="" />
                  </button>
                </form>
              </div>
              <div>
                <p className="footer-title">Kết nối với chúng tôi</p>
                <ul className="connect">
                  {connects.map((connect, index) => {
                    return (
                      <a
                        href={connect.link}
                        key={index}
                        className="connect-item"
                      >
                        <img src={connect.img} alt="" />
                      </a>
                    );
                  })}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2021 - 2022. Batdongsan.vn</p>
      </div>
    </div>
  );
}
