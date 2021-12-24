import React from "react";
import "./Post.css";
export default function Post() {
  return (
    <div className="post-container">
      <div className="post-detail-container">
        <div className="post-overview">
          <div className="post-header">Thông tin chung</div>
          <div className="post-infomation">
            <div className="post-re-info">
              <p>Tên bất động sản</p>
              <input placeholder="Nhà đất"></input>
            </div>
            <div className="post-re-info">
              <p>Địa điểm</p>
              <input placeholder="Nhập địa chỉ"></input>
            </div>
            <div className="post-re-info">
              <p>Mức giá</p>
              <input placeholder="VND"></input>
            </div>
            <div className="post-re-info">
              <p>Diện tích</p>
              <input placeholder="Nhập diện tích"></input>
            </div>
          </div>
        </div>

        <div className="post-detail">
          <div className="post-header">Thông tin chi tiết</div>
          <div className="post-re-info">
            <p>Nội thất</p>
            <input placeholder="Nội thất"></input>
          </div>
          <div className="post-re-info">
            <p>Giấy tờ pháp lý</p>
            <input placeholder="Thông tin giấy tờ"></input>
          </div>
          <div className="post-re-info">
            <p>Số phòng ngủ</p>
            <input placeholder="Số phòng ngủ"></input>
          </div>
          <div className="post-re-info">
            <p>Số phòng toilet</p>
            <input placeholder="Số phòng toilet"></input>
          </div>
          <div className="post-re-info">
            <p>Số tầng</p>
            <input placeholder="Số tầng"></input>
          </div>
        </div>

        <div className="post-contact">
          <div className="post-header">Thông tin liên hệ chủ sỡ hữu</div>
          <div className="post-re-info">
            <p>Tên liên hệ</p>
            <input placeholder="Nhập tên lên hệ"></input>
          </div>
          <div className="post-re-info">
            <p>Địa chỉ mail</p>
            <input placeholder="Nhập địa chỉ mail"></input>
          </div>
          <div className="post-re-info">
            <p>Số điện thoại</p>
            <input placeholder="Nhập số điện thoại"></input>
          </div>
          <div className="post-re-info">
            <p>Địa chỉ</p>
            <input placeholder="Nhập địa chỉ"></input>
          </div>
        </div>

        <div className="post-image">
          <div className="post-header">Thông tin thêm</div>
          <div className="post-re-info">
            <p>Ảnh bất động sản</p>
            <input placeholder="Nhập link ảnh"></input>
          </div>
          <div className="post-re-info">
            <p>Mô tả thêm</p>
            <input placeholder="Mô tả thêm về bất động sản"></input>
          </div>
          <button className="post-btn-save" onClick={AddNofication}>
            <a>
              <span class="material-icons">file_upload</span>
              <p> Đăng tin</p>
            </a>
          </button>
        </div>
      </div>
      <div className="post-type">
        <div className="post-re-type">
          <p>Loại tin đăng</p>
          <select className="post-type-select">
            <option value="1">Bán</option>
            <option value="2">Cho thuê</option>
          </select>
        </div>
        <div className="post-re-type">
          <p>Loại bất dộng sản</p>
          <select className="post-type-select">
            <option value="1">Nhà riêng </option>
            <option value="2">Căn hộ chung cư </option>
            <option value="3">Đất nền dự án</option>
            <option value="4">Bất động sản khác </option>
            <option value="5">Biệt thự liền kề </option>
            <option value="6">Codotel </option>
            <option value="7">Nhà mặt phố </option>
            <option value="8">Đất </option>
            <option value="9">Trang trại khu nghỉ dưỡng </option>
            <option value="10">Bán kho, nhà xưởng </option>
          </select>
        </div>
        <div className="post-re-dateupload">
          <p>Ngày bắt đầu</p>
          <input type="date" name="bdaytime"></input>
        </div>
        <div className="post-re-datetotal">
          <p>Số ngày đăng:</p>
          <input placeholder="Chọn ngày"></input>
        </div>
        <div className="post-re-unitprice">
          <p>Đơn giá/ngày:</p>
          <input placeholder="21.000 VNĐ" readonly="readonly"></input>
        </div>
        <div className="post-re-totalprice">
          <p>Tổng cộng:</p>
          <input placeholder="210.000 VNĐ" readonly="readonly"></input>
        </div>
      </div>
    </div>
  );
}

function AddNofication() {
  alert("Đăng tin thành công");
}
