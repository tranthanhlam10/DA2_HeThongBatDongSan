import React from "react";
import "./Seen.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReCardInfo from "./ReCardInfo";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
const reCardList = [
  {
    price: "45 triệu/m2",
    name: "Zeus",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://beatnhadat.com/wp-content/uploads/2021/01/Du-an-can-ho-chung-cu-Tan-Binh-La-Cosmo-Residences.jpg",
    link: '/realestate'
  },
  {
    price: "45 triệu/m2",
    name: "Celesta",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://trandinhhieu.com/wp-content/uploads/2021/05/phoi-canh-du-an-can-ho-celesta-heights.jpeg",
    link: '/realestate'
  },
  {
    price: "45 triệu/m2",
    name: "Thor",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxN1IrEHODm_QKKwZXi1m5eB8F6k5T-T6Xw&usqp=CAU",
    link: '/realestate'
  },
  {
    price: "45 triệu/m2",
    name: "Odin",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://duanbcons.vn/wp-content/uploads/2021/06/can-ho-gia-re-hcm.jpeg",
    link: '/realestate'
  },
  {
    price: "45 triệu/m2",
    name: "Loki",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCAOMH05_TRZWVT1z5GdhGmVR9-D2aCpeuAA&usqp=CAU",
    link: '/realestate'
  },
  {
    price: "45 triệu/m2",
    name: "Poseidon",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://images.cenhomes.vn/2019/04/safira-khang-dien.jpg",
    link: '/realestate'
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
        autoplayTimeout={5000}
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
                link={reCard.link}
              />
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
}
