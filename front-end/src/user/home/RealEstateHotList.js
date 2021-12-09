import React from "react";
import "./RealEstateHotList.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";

import anhdemo1 from "../../assets/anhdemo1.jpg";
import anhdemo2 from "../../assets/anhdemo2.jpg";
import anhdemo3 from "../../assets/anhdemo3.jpg";
import anhdemo4 from "../../assets/anhdemo4.jpg";
import anhdemo5 from "../../assets/anhdemo5.jpg";
import anhdemo6 from "../../assets/anhdemo6.jpg";
import HotProductCard from "./HotProductCard";

const hotCardList = [
  {
    price: "3,9 Tỷ/Căn",
    name: "Dự án Chợ và Nhà phố thị xã Bình Minh",
    address: "Đường Ngô Quyền, Thị trấn Cái Vồn, Bình Minh, Vĩnh Long",
    juridical: "Sổ đỏ",
    areainfo: "2,500m2",
    img: anhdemo1,
    link: "/realestate",
  },
  {
    price: "2,2 Tỷ/Căn",
    name: "Hamubay Phan Thiết",
    address: "Đức Long, Phan Thiết, Bình Thuận",
    juridical: "Sổ hồng",
    areainfo: "2,500m2",
    img: anhdemo2,
    link: "/realestate",
  },
  {
    price: "1,4 Tỷ/Căn",
    name: "Thắng Lợi J-Dragon Cần Đước",
    address: "Đường Trần Hưng Đạo, Thị trấn Cần Đước, Cần Đước, Long An",
    juridical: "Sổ đỏ",
    areainfo: "2,500m2",
    img: anhdemo3,
    link: "/realestate",
  },
  {
    price: "1,8 Tỷ/Căn",
    name: "Căn hộ Citi Grand Quận 2",
    address: "Cát Lái, Quận 2, Thành phố Hồ Chí Minh",
    juridical: "Sở hữu lâu dài",
    areainfo: "2,500m2",
    img: anhdemo4,
    link: "/realestate",
  },
  {
    price: "Đang cập nhật",
    name: "Biệt thự Lavila Rop",
    address: "Đường Nguyễn Hữu Thọ, Xã Phước Kiến, Nhà Bè, Hồ Chí Minh",
    juridical: "Sổ đỏ",
    areainfo: "2,500m2",
    img: anhdemo5,
    link: "/realestate",
  },
  {
    price: "50 triệu/m2",
    name: "Dự án Vincom Long An",
    address: "Phường 2, Thành Phố Tân An, Long An",
    juridical: "Sổ hồng",
    areainfo: "2,500m2",
    img: anhdemo6,
    link: "/realestate",
  },
];
const prevIcon = `<img src=${prev} />`;
const nextIcon = `<img src=${next} />`;
export default function HomeCarouselOwl() {
  return (
    <div className="owl-container">
      <div className="owl-title-hot">
        <p>Đang mở bán</p>
      </div>
      <OwlCarousel
        items={3}
        margin={24}
        nav={true}
        loop
        dots={false}
        autoWidth
        navContainerClass="re-nav-container"
        navText={[prevIcon, nextIcon]}
        navClass={["re-prev-owl", "re-next-owl"]}
      >
        {hotCardList.map((reCard, index) => {
          return (
            <div class="item-hot">
              <HotProductCard
                price={reCard.price}
                name={reCard.name}
                address={reCard.address}
                juridical={reCard.juridical}
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
