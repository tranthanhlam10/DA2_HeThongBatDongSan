import React from "react";
import "./AddRealEstateDetail.css";

export default function AddRealEstateDeatailDetail() {
  return (
    <>
      <h2 className="popup-header">Thêm nhà đất</h2>
      <div>
        <h3 className="popup-re-name">Tên nhà đất:</h3>
        <input
          placeholder="Nhập tên nhà đất"
          className="popup-re-input-name "
        ></input>
      </div>
      <div>
        <h3 className="popup-re-address">Địa chỉ:</h3>
        <input
          placeholder="Nhập địa chỉ của nhà đất"
          className="popup-re-input-address"
        ></input>
      </div>
      <div className="area-type-re">
        <div>
          <h3 className="popup-re-area">Khu vực:</h3>
          <input
            placeholder="Nhập nhập khu vực của nhà đất"
            className="popup-re-input-area"
          ></input>
        </div>
        <div>
          <h3 className="popup-re-type">Loại:</h3>
          <select className="popup-re-input-type">
            <option value="1">Chung cư</option>
            <option value="2">Đất thổ</option>
            <option value="3">Nhà mặt tiền</option>
            <option value="4">Nhà phố</option>
            <option value="5">Shophouse</option>
            <option value="6">Penhouse</option>
          </select>
        </div>
      </div>
      <div className="price-orient-re">
        <div>
          <h3 className="popup-re-price">Giá bán:</h3>
          <input
            placeholder="Nhập giá bán"
            className="popup-re-input-price"
          ></input>
        </div>
        <div>
          <h3 className="popup-re-orientation">Hướng nhà đất:</h3>
          <input
            placeholder="Nhập hướng nhà đất"
            className="popup-re-input-orientation"
          ></input>
        </div>
        <div>
          <h3 className="popup-re-acreage">Diện tích: </h3>
          <input
            placeholder="Nhập diện tích"
            className="popup-re-input-acreage"
          ></input>
        </div>
      </div>
      <div className="floor-room-re">
        <div>
          <h3 className="popup-re-floor">Số tầng: </h3>
          <input
            placeholder="Nhập số tầng"
            className="popup-re-input-floor"
          ></input>
        </div>
        <div>
          <h3 className="popup-re-room">Số phòng: </h3>
          <input
            placeholder="Nhập số phòng"
            className="popup-re-input-room"
          ></input>
        </div>
        <div>
          <h3 className="popup-re-sold"> Trạng thái:</h3>
          <select className="popup-re-input-sold">
            <option value="true">Đã bán</option>
            <option value="false">Chưa bán</option>
          </select>
        </div>
      </div>
      <div>
        <h3 className="popup-re-img"> Ảnh bất động sản:</h3>
        <input
          placeholder="Tải ảnh bất động sản"
          className="popup-re-input-img"
        ></input>
      </div>

      <div className="add-reload-button">
        <button className="add-re-btn" onClick={AddNofication}>
          <a>
            <span class="material-icons">add_circle</span>
            <span>Thêm </span>
          </a>
        </button>
        <button className="reload-re-btn" onClick={ReLoadNofication}>
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
