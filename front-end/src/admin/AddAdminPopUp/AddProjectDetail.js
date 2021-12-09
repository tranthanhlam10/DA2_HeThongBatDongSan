import React from "react";
import "./AddProjectDetail.css";

export default function AddProjectDetail() {
  return (
    <>
      <h2 className="popup-header">Thêm dự án</h2>
      <div>
        <h3 className="popup-project-name">Tên dự án:</h3>
        <input
          placeholder="Nhập tên dự án"
          className="popup-pj-input-name"
        ></input>
      </div>
      <div>
        <h3 className="popup-project-investor">Nhà đầu tư:</h3>
        <input
          placeholder="Nhập tên nhà đầu tư"
          className="popup-pj-input-investor"
        ></input>
      </div>
      <div>
        <h3 className="popup-project-intro">Nhập thông tin giới thiệu:</h3>
        <input
          placeholder="Nhập thông tin"
          className="popup-pj-input-intro"
        ></input>
      </div>
      <div>
        <h3 className="popup-project-info">Nhập thông tin chi tiết: </h3>
        <input
          placeholder="Nhập thông tin chi tiết"
          className="popup-pj-input-info"
        ></input>
      </div>
      <div>
        <h3 className="popup-project-benefitcus">Lợi ích khách hàng: </h3>
        <input
          placeholder="Nhập lợi ích khách hàng"
          className="popup-pj-input-benefitcus"
        ></input>
      </div>
      <div className="procedure-area">
        <div>
          <h3 className="popup-project-procedure">Thủ tục:</h3>
          <input
            placeholder=" Nhập thủ tục cho dự án"
            className="popup-pj-input-procedure"
          ></input>
        </div>
        <div>
          <h3 className="popup-project-area">Nhập khu vực của dự án:</h3>
          <input
            placeholder="Nhập khu vực cho dự án"
            className="popup-pj-input-area"
          ></input>
        </div>
      </div>
      <div>
        <h3 className="popup-project-load-img">Chọn ảnh cho dự án:</h3>
        <input
          placeholder="Tải ảnh lên"
          className="popup-pj-input-load-img"
        ></input>
      </div>
      <div className="add-reload-button">
        <button className="add-pj-btn" onClick={AddNofication}>
          <a>
            <span class="material-icons">add_circle</span>
            <span>Thêm </span>
          </a>
        </button>
        <button className="reload-pj-btn" onClick={ReLoadNofication}>
          <a>
            <span class="material-icons">restart_alt</span>
            <span> Nhập lại </span>
          </a>
        </button>
      </div>
    </>
  );
}

function AddNofication() {
  alert("Thêm thành công");
}
function ReLoadNofication() {
  alert("Bạn có muốn nhập lại không ?");
}
