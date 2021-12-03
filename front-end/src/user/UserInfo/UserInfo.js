import React from "react";
import "./UserInfo.css";

import { Link } from "react-router-dom";

export default function UserInfo() {
  return (
    <div className="user-info-container">
      <div className="user-info-description">
        <div className="des-header">
          <p>Trang cá nhân</p>
        </div>
        <div className="des-infomation">
          <img
            src="https://64.media.tumblr.com/ab8f387b3e4d08d3a517b1f7766ace2b/tumblr_p4bm0eQ05h1wzkv79o1_1280.jpg"
            className="des-avatar"
          />
          <p className="des-name">Duy Bảo</p>
        </div>
        <button className="des-btn-img">Thêm ảnh đại diện</button>
      </div>
      <div className="user-info-detail">
        <div className="detail-header">Thông tin cá nhân</div>
        <div className="detail-infomation">
          <div className="detail-name">
            <p>Họ tên</p>
            <input placeholder="Nhập họ và tên" value="Duy Bảo"></input>
          </div>
          <div className="detail-rename">
            <p>Tên thường gọi</p>
            <input placeholder="Nhập tên thường gọi"></input>
          </div>
          <div className="detail-address">
            <p>Địa chỉ</p>
            <input placeholder="Nhập địa chỉ"></input>
          </div>
          <div className="detail-dob">
            <p>Ngày sinh</p>
            {/* <input placeholder="Nhập ngày sinh"></input>  */}
            <input type="date" name="bdaytime"></input>
          </div>
          <div className="detail-phone">
            <p>Số điện thoại</p>
            <input placeholder="Nhập số điện thoại"></input>
          </div>
          <div className="detail-email">
            <p>Địa chỉ mail</p>
            <input placeholder="Nhập email" value="ldbao@gmail.com"></input>
          </div>
          <div className="detail-password">
            <p>Mật khẩu</p>
            <input placeholder="Sửa password" value="admin"></input>
          </div>
          <button className="detail-btn-save">
            <a>
              <span class="material-icons">archive</span>
              <p>Lưu lại</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
