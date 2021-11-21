import React from "react";
import "./Area.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReCardInfo from "./ReCardInfo";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";
const reCardList = [
  {
    price: "45 triệu/m2",
    name: "Prometheus",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://top247.vn/wp-content/uploads/2020/07/top-5-can-ho-chung-cu-tot-nhat-tai-quan-binh-thanh-3.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Zeus",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://cdn.thongtinduan.com/uploads/posts/2019-07/1562840079_invgkij04d5naabx.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Loki",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://nguyenmanhninh.com/wp-content/uploads/2015/07/30-6.png",
  },
  {
    price: "45 triệu/m2",
    name: "Thor",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://thuanhunggroup.com/wp-content/uploads/2018/08/Du%CC%9B%CC%A3-a%CC%81n-ca%CC%86n-ho%CC%A3%CC%82-chung-cu%CC%9B-cao-ca%CC%82%CC%81p-Topaz-Twins-Bie%CC%82n-Hoa%CC%80-%C4%90o%CC%82%CC%80ng-Nai.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Hella",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://cafefcdn.com/thumb_w/650/2019/2019-ava-15584036366861560589865-3-0-391-621-crop-1558403643934-636940319687187500.jpg",
  },
  {
    price: "45 triệu/m2",
    name: "Poseidon",
    address: "Địa chỉ",
    numofbed: "2",
    numofbath: "2",
    areainfo: "2,500m2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4pT-33MVDC6gVwLbuz-u8kluyvYc1LEA_A&usqp=CAU",
  },
];
const prevIcon = `<img src=${prev} />`;
const nextIcon = `<img src=${next} />`;
export default function Area() {
  return (
    <div className="owl-container">
      <div className="owl-title">
        <p>Bất động sản cùng khu vực</p>
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
              />
            </div>
          );
        })}
      </OwlCarousel>
    </div>
  );
}
