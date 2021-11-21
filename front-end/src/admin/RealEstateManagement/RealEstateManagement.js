import React from "react";
import "./RealEstateManagement.css";
export default function RealEstateManagement() {
  return (
    <div className="admin-rem-content">
      <h2 className="admin-rem-heading">ADMIN DASHBOARD</h2>
      <div className="admin-rem-table">
        <div className="admin-rem-table-content">
          <div></div>
          <h1 className="rem-table-title">Quản lý nhà đất</h1>
          <button className="rem-btn-addre">
            <p>Thêm nhà đất mới</p>
          </button>
        </div>
        <div className="rem-search-bar">
          <input
            type="search"
            placeholder="Tìm nhà đất"
            className="rem-search-input"
          ></input>
          <button className="rem-search-button">
            <span className="material-icons">search</span>
          </button>
        </div>
        <table className="rem-table-re-detail">
          <tr>
            <th>id</th>
            <th>Tên nhà đất</th>
            <th>Giá</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Vinhomes</td>
            <td>15 tỷ</td>
            <td>Sài Gòn</td>
            <td colspan="2">
              <button className="btn--view-rem">View</button>
              <button className="btn--delete-rem">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Salah</td>
            <td>29 Tỷ</td>
            <td>Sài Gòn</td>
            <td colspan="2">
              <button className="btn--view-rem">View</button>
              <button className="btn--delete-rem">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>KTX ĐHQG</td>
            <td>35 Tỷ</td>
            <td>Bình Dương</td>
            <td colspan="2">
              <button className="btn--view-rem">View</button>
              <button className="btn--delete-rem">Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Suối Tiên</td>
            <td>20 tỷ</td>
            <td>Đồng Nai</td>
            <td colspan="2">
              <button className="btn--view-rem">View</button>
              <button className="btn--delete-rem">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
