import React from "react";
import "./SearchBar.css";

import Option from "./Option";
const cityItems = [
  {
    itemName: "Tất cả",
  },
  {
    itemName: "Hồ Chí Minh",
  },
  {
    itemName: "Hà Nội",
  },
  {
    itemName: "Đồng Nai",
  },
  {
    itemName: "Ninh Thuận",
  },
  {
    itemName: "Bến Tre",
  },
  {
    itemName: "Long An",
  },
  {
    itemName: "Vũng Tàu",
  },
  {
    itemName: "Đồng Tháp",
  },
  {
    itemName: "Cà Mau",
  },
];
const priceItems = [
  {
    itemName: "Tất cả",
  },
  {
    itemName: "Dưới 500 triệu",
  },
  {
    itemName: "500 -> 1 tỷ",
  },
  {
    itemName: "1 -> 2 tỷ",
  },
  {
    itemName: "2 -> 3 tỷ",
  },
  {
    itemName: "3 -> 5 tỷ",
  },
  {
    itemName: "5 -> 7 tỷ",
  },
  {
    itemName: "7 -> 10 tỷ",
  },
  {
    itemName: "10 -> 20 tỷ",
  },
];
const areaItems = [
  {
    itemName: "Tất cả",
  },
  {
    itemName: "Dưới 30 m2",
  },
  {
    itemName: "30 -> 50 m2",
  },
  {
    itemName: "50 -> 80 m2",
  },
  {
    itemName: "80 -> 100 m2",
  },
  {
    itemName: "100 -> 150 m2",
  },
  {
    itemName: "150 -> 300 m2",
  },
  {
    itemName: "300 -> 500 m2",
  },
  {
    itemName: "Trên 500 m2",
  },
];
export default function SearchBar() {
  return (
    <div className="searchbar">
      <form action="" className="search-input">
        <div className="input-container">
          <span className="material-icons">search</span>
          <input placeholder="Nhập địa điểm hoặc dự án..." type="text"></input>
        </div>
        <Option
          title={"Khu vực"}
          optionItems={cityItems}
          isArrowRight={"True"}
        />
        <Option title={"Mức giá"} optionItems={priceItems} />
        <Option title={"Diện tích"} optionItems={areaItems} />
        <Option title={"Dự án"} optionItems={areaItems} />
        <Option title={"Phường/Xã"} optionItems={areaItems} />
        <Option title={"Đường phố"} optionItems={areaItems} />

        <button className="search-btn">
          <span className="material-icons">search</span>
          <p1>Tìm kiếm</p1>
        </button>
        <button className="reset-btn">
          <span className="material-icons">delete</span>
        </button>
      </form>
    </div>
  );
}
