import React from "react";
import "./CarouselOwl.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReCardInfo from "./ReCardInfo";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
const reCardList = [
  {
    price: "45 triệu/m2",
    name: "Tên dự án",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://toquoc.mediacdn.vn/Uploaded/haht/2017_03_20/3E52FD1300000578_0_Steve_Dee_who_lives_in_New_Jersey_spends_his_holidays_diving_wit_a_37_1489663380296_FUNQ.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Tên dự án",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://toquoc.mediacdn.vn/Uploaded/haht/2017_03_20/3E52FD1300000578_0_Steve_Dee_who_lives_in_New_Jersey_spends_his_holidays_diving_wit_a_37_1489663380296_FUNQ.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Tên dự án",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://toquoc.mediacdn.vn/Uploaded/haht/2017_03_20/3E52FD1300000578_0_Steve_Dee_who_lives_in_New_Jersey_spends_his_holidays_diving_wit_a_37_1489663380296_FUNQ.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Tên dự án",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://toquoc.mediacdn.vn/Uploaded/haht/2017_03_20/3E52FD1300000578_0_Steve_Dee_who_lives_in_New_Jersey_spends_his_holidays_diving_wit_a_37_1489663380296_FUNQ.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Tên dự án",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://toquoc.mediacdn.vn/Uploaded/haht/2017_03_20/3E52FD1300000578_0_Steve_Dee_who_lives_in_New_Jersey_spends_his_holidays_diving_wit_a_37_1489663380296_FUNQ.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Tên dự án",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://toquoc.mediacdn.vn/Uploaded/haht/2017_03_20/3E52FD1300000578_0_Steve_Dee_who_lives_in_New_Jersey_spends_his_holidays_diving_wit_a_37_1489663380296_FUNQ.jpg",
  },
];
const prevIcon = `<img src=${prev} />`;
const nextIcon = `<img src=${next} />`;
export default function CarouselOwl() {
  return (
    <div className="owl-container">
      <div className="owl-title">
        <p>Tin đăng đã xem</p>
      </div>
      <OwlCarousel
        items={3}
        margin={24}
        nav
        autoplay={true}
        autoplayTimeout={1000}
        loop
        dots={false}
        autoWidth
        navContainerClass="re-nav-container"
        navText={[prevIcon, nextIcon]}
        navClass={["re-prev-owl", "re-next-owl"]}
      >
        {reCardList.map((reCard, index) => {
          return (
            <div class="item">
              <ReCardInfo
                price={reCard.price}
                name={reCard.name}
                address={reCard.address}
                numofbed={reCard.numofbed}
                numofbath={reCard.numofbath}
                areainfo={reCard.areainfo}
                img={reCard.img}
              />
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
}
