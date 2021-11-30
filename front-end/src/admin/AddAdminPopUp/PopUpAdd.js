import React from "react";
import "./PopUpAdd.css";

export default function PopUpAdd(props) {
  return props.trigger ? (
    <div className="project-popup">
      <div className=" popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <span>Đóng</span>{" "}
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
