import React from "react";
import "./WishList.css";
import SearchBar from "../../common/SearchBar/SearchBar";
import WishCard from "./WishCard";
import WishSort from "./WishSort";
const Wishcardlist = [
  {
    img: "https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg",
    name: "Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th",
    time: "6 ngày trước",
    price: "14 TRIỆU/THÁNG",
    area: "70",
    location: "QUẬN NAM TỪ LIÊM, HÀ NỘI",
    link: "/realestate",
  },
  {
    img: "https://cdn.houseviet.vn/images/post/02022021/132567282206070776-380x190.jpg",
    name: "Chính chủ cho thê căn hộ chung cư central field 219 trung kính, dt 70m2, giá 14tr/th",
    time: "6 ngày trước",
    price: "14 TRIỆU/THÁNG",
    area: "70",
    location: "QUẬN NAM TỪ LIÊM, HÀ NỘI",
    link: "/realestate",
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
              <h2>Tin đăng đã lưu</h2>
              <p>Tổng số 2 tin đăng</p>
            </div>
            <div className="con-wish-button">
              <WishSort />
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
                    link={reCard.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="wish-list-ads"></div> */}
      </div>
    </div>
  );
}
