import React from "react";
import "./AddUserDetail.css";

export default function AddUserDetail() {
  return (
    <>
      <h2 className="popup-header">Thêm tài khoản</h2>
      <div>
        <h3 className="popup-us-name">Tên tài khoản:</h3>
        <input
          placeholder="Nhập tên tài khoản"
          className="popup-us-input-name "
        ></input>
      </div>
      <div>
        <h3 className="popup-us-email">Email:</h3>
        <input
          placeholder="Nhập email: example@gmail.com "
          className="popup-us-input-email"
        ></input>
      </div>
      <div>
        <h3 className="popup-us-dob">Chọn ngày sinh:</h3>
        <input
          placeholder="Chọn ngày sinh"
          className="popup-us-input-dob"
        ></input>
      </div>
      <div>
        <h3 className="popup-us-password">Nhập mật khẩu: </h3>
        <input
          placeholder="Nhập mật khẩu"
          className="popup-us-input-password"
        ></input>
      </div>
      <div>
        <h3 className="popup-us-phone">Nhập số điện thoại: </h3>
        <input
          placeholder="Nhập số điện thoại"
          className="popup-us-input-phone"
        ></input>
      </div>

      <div>
        <h3 className="popup-us-role"> Cấp tài khoản:</h3>
        <select className="popup-us-input-role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
        </select>
      </div>

      <div className="add-reload-button">
        <button className="add-us-btn" onClick={AddNofication}>
          {" "}
          <a>
            <span class="material-icons">add_circle</span>
            <span>Thêm </span>
          </a>
        </button>
        <button className="reload-us-btn" onClick={ReLoadNofication}>
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
