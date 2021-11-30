import React, { useState } from "react";
import "./WishSort.css";
import { Link } from "react-router-dom";
const sortItems = [
  {
    displayName: "Lưu mới nhất",
  },
  {
    displayName: "Tin mới nhất",
  },
  {
    displayName: "Giá từ thấp đến cao",
  },
  {
    displayName: "Diện tích bé đến lớn",
  },
  {
    displayName: "Diện tích lớn đến bé",
  },
];
export default function WishSort() {
  const [display, setDisplay] = useState("Sắp xếp theo");
  return (
    <div className="wish-sort-control">
      <div className="wish-filter-header">
        {display}
        <span className="material-icons">expand_more</span>
        <ul className="wish-sorted-list">
          {sortItems.map((item, index) => {
            return (
              <li
                className="wish-sorted-item"
                key={index}
                onClick={() => setDisplay(item.displayName)}
              >
                <span>{item.displayName}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
