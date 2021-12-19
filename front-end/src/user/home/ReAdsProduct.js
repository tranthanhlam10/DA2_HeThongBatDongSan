import React from "react";
import "./ReAdsProduct.css";
import anhdemo1 from "../../assets/anhdemo1.jpg";
import ReAdsCard from "./ReAdsCard";
const ReAdsProductList = [
  {
    price: "5,961 Tỷ",
    name: "Bán đất nền tại sông thao trảng bom Đồng Nai",
    address: "Trảng Bom, Đồng Nai",
    time: "1 ngày trước",
    areainfo: "1064,5 m2",
    img: "https://cdn.houseviet.vn/images/project/02112021/apec-mandala-retreats-mui-ne-s.jpg",
    link: "realestate"
  },
  {
    price: "1,79 Tỷ",
    name: "Mở bán căn hộ khu chung cư Khang Điền",
    address: "Quận 2, thành phố Hồ Chí Minh",
    time: "16 phút trước",
    areainfo: "50 m2",
    img: "https://cdn.houseviet.vn/images/project/01112021/armena-khang-dien-s.jpg",
    link: "realestate"
  },
  {
    price: "800 Triệu",
    name: "Bán căn hộ tại Thuận An",
    address: "Thuận An, Bình Dương",
    time: "2 ngày trước",
    areainfo: "KXĐ",
    img: "https://cdn.houseviet.vn/images/project/03112021/diamond-square-bong-son-s.jpg",
    link: "realestate"
  },
  {
    price: "Thỏa thuận",
    name: "Căn hộ the green park quận 7",
    address: "Quận 7, thành phó Hồ Chí Minh",
    time: "một tuần trước",
    areainfo: "60m2",
    img: "https://cdn.houseviet.vn/images/project/05112021/tnr-grand-long-khanh-s.jpg",
    link: "realestate"
  },
  {
    price: "4,5 Tỷ",
    name: "Bán nhà phố thương mại dự án royal town",
    address: "Dĩ An, Bình Dương",
    time: "4 ngày trước",
    areainfo: "80m2",
    img: "https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg",
    link: "realestate"
  },
  {
    price: "5 Tỷ",
    name: "Bán biệt thự, nhà phố liền kề dự án la casa",
    address: "Phan Thiết, Bình Thuận",
    time: "5 ngày trước",
    areainfo: "100 m2",
    img: "https://cdn.houseviet.vn/images/project/10112021/khu-phuc-hop-la-casa-s.jpg",
    link: "realestate"
  },
  {
    price: "4,161 tỷ",
    name: "Căn hộ Paris Hoàng Kim quận 2",
    address: "Quận 2, thành phố Hồ Chí Minh",
    time: "1 ngày trước",
    areainfo: "57 m2",
    img: "https://cdn.houseviet.vn/images/project/13102021/diamond-smart-city-s.jpg",
    link: "realestate"
  },
  {
    price: "2,8 Tỷ",
    name: "Mở bán nền nhà phố, biệt thự dự án lagi new",
    address: "La Gi, Bình Thuận",
    time: "6 ngày trước",
    areainfo: "80 m2",
    img: "https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg",
    link: "realestate"
  },
];
export default function ReAdsProduct() {
  return (
    <div className="real-estate-ads-container">
      <div className="re-ads-title">
        <p>Tin rao nhà đất nổi bật</p>
      </div>
      <div className="re-ads-product">
        {ReAdsProductList.map((reCard, index) => {
          return (
            <div class="ads-item">
              <ReAdsCard
                price={reCard.price}
                name={reCard.name}
                address={reCard.address}
                time={reCard.time}
                areainfo={reCard.areainfo}
                img={reCard.img}
                link={reCard.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
