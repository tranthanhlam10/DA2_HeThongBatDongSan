import React from "react";
import "./WishList.css";
import SearchBar from "../../common/SearchBar/SearchBar";
import WishCard from "./WishCard";
import WishSort from "./WishSort";
import { connect } from "react-redux";
const Wishcardlist = [
  {
    img: "https://abcland.vn/wp-content/uploads/2020/05/bat-dong-san-la-gi.jpg",
    name: "Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th",
    time: "20 ngày trước",
    price: "140 TRIỆU/THÁNG",
    area: "700",
    location: "Biên Hòa, Đồng Nai",
    link: "/realestate",
  },
  {
    img: "https://luatduonggia.vn/wp-content/uploads/2015/08/dong-san-va-bat-dong-san-theo-quy-dinh-cua-phap-luat-viet-nam.jpeg",
    name: "Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th",
    time: "6 ngày trước",
    price: "100 TRIỆU/THÁNG",
    area: "90",
    location: "QUẬN NAM TỪ LIÊM, HÀ NỘI",
    link: "/realestate",
  },
];

function Wishlist(props) {
  return (
    <div className="wish-list-page">
      <SearchBar />
      <div className="wish-list-content">
        <div className="wish-list-container">
          <div className="wish-heading">
            <div className="wish-title">
              <h2>Tin đăng đã lưu</h2>
              <p>Tổng số {props.numberCart} tin đăng</p>
            </div>
            <div className="con-wish-button">
              <WishSort />
            </div>
          </div>
          {props.numberCart ? (
            <div className="wish-card-container">
              {Wishcardlist.map((reCard, index) => {
                return (
                  <div class="wish-item">
                    <WishCard
                      price={reCard.price}
                      name={reCard.name}
                      location={reCard.location}
                      time={reCard.time}
                      area={reCard.area}
                      img={reCard.img}
                      link={reCard.link}
                    />
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        {/* <div className="wish-list-ads"></div> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(Wishlist);
