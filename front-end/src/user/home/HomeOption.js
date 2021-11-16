import React from "react";
import "./HomeOption.css";

/*Chưa hiểu cách sử lí dữ kiện trong React*/
export default function HomeOption(props) {
  const { optionItems } = props;

  return (
    <div className="option-list-container">
      <ul className="option-list">
        {optionItems.map((item, index) => {
          return (
            <li onClick={() => this.itemName}>
              <p>{item.itemName}</p>
              {
                <span className="material-icons icon-arrow-right">
                  navigate_next
                </span>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}
