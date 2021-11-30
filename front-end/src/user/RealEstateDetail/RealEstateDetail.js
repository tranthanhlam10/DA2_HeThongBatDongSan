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

          <NearRealEstate />

          <HotRealEstate />
        </div>
      </div>
    </div>
  );
}
