import React from "react";
import "./Wishlist.css";
import SearchBar from "../../common/SearchBar/SearchBar";
import WishCard from "./WishCard";
const Wishcardlist = [
  {
    img: "https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg",
    name: "Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th",
    time: "6 ngày trước",
    price: "14 TRIỆU/THÁNG",
    area: "70",
    location: "QUẬN NAM TỪ LIÊM, HÀ NỘI",
  },
  {
    img: "https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg",
    name: "Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th",
    time: "6 ngày trước",
    price: "14 TRIỆU/THÁNG",
    area: "70",
    location: "QUẬN NAM TỪ LIÊM, HÀ NỘI",
  },
];

export default function Wishlist() {
  return (
    <div className="wish-list-page">
      <SearchBar />
      <div className="wish-list-content">
        <div className="wish-list-container">
          <div className="wish-heading">
            <div className="wish-title">
              <p>Tin đăng đã lưu</p>
              <p>Tổng số tin đã đăng</p>
            </div>
            <div className="con-wish-button">
              <div className="wish-button">
                <p>Lưu mới nhất</p>
                <span className="material-icons">expand_more</span>
              </div>
            </div>
          </div>
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
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="wish-list-ads"></div>
      </div>
    </div>
  );
}
