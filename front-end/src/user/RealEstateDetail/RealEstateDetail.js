import React from "react";
import "./RealEstateDetail.css";
import SearchBar from "../../common/SearchBar/SearchBar";
import RealEstateInfo from "./RealEstateInfo";
import InfoBox from "./InfoBox";
import NearRealEstate from "./NearRealEstate";
import HotRealEstate from "./HotRealEstate";
import ReCarousel from "./ReCarousel";
import ReCardInfo from "./ReCardInfo";
import Area from "./Area";
import Seen from "./Seen";
const nearList = [
  {
    title: "Bất động sản gần khu vực đang xem",
    nearItems: [
      {
        displayName: "Astra City",
        num: "19",
        link: "",
      },
      {
        displayName: "Astra City",
        num: "19",
        link: "",
      },
      {
        displayName: "Astra City",
        num: "19",
        link: "",
      },
      {
        displayName: "Astra City",
        num: "19",
        link: "",
      },
      {
        displayName: "Astra City",
        num: "19",
        link: "",
      },
      {
        displayName: "Astra City",
        num: "19",
        link: "",
      },
      {
        displayName: "Astra City",
        num: "19",
        link: "",
      },
    ],
  },
];
const hotRealEstateList = [
  {
    title: "Bất động sản nổi bật",
    hotRealEstateItems: [
      {
        displayName: "Nhà đất Thuận An",
        link: "",
      },
      {
        displayName: "Nhà đất Thuận An",
        link: "",
      },
      {
        displayName: "Nhà đất Thuận An",
        link: "",
      },
      {
        displayName: "Nhà đất Thuận An",
        link: "",
      },
      {
        displayName: "Nhà đất Thuận An",
        link: "",
      },
      {
        displayName: "Nhà đất Thuận An",
        link: "",
      },
      {
        displayName: "Nhà đất Thuận An",
        link: "",
      },
    ],
  },
];
export default function RealEstateDetail() {
  return (
    <div className="real-estate-container">
      <SearchBar />
      <div className="real-estate-main">
        <div className="real-estate-info">
          <ReCarousel />
          <RealEstateInfo />
          <Area />
          <Seen />
        </div>
        <div className="info-owner-container">
          <InfoBox />
          {nearList.map((item, index) => {
            return (
              <NearRealEstate
                key={index}
                title={item.title}
                nearItems={item.nearItems}
              />
            );
          })}
          {hotRealEstateList.map((item, index) => {
            return (
              <HotRealEstate
                key={index}
                title={item.title}
                hotRealEstateItems={item.hotRealEstateItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
