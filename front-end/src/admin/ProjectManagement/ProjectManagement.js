import React from "react";
import "./ProjectManagement.css";
export default function ProjectManagement() {
  return (
    <div className="admin-pm-content">
      <h2 className="admin-pm-heading">ADMIN DASHBOARD</h2>
      <div className="admin-pm-table">
        <div className="admin-pm-table-content">
          <div></div>
          <h1 className="pm-table-title">Quản lý dự án</h1>
          <button className="pm-btn-addre">Thêm dự án mới</button>
        </div>
        <div className="pm-search-bar">
          <input
            type="search"
            placeholder="Tìm dự án"
            className="pm-search-input"
          ></input>
          <button className="pm-search-button">
            <span className="material-icons">search</span>
          </button>
        </div>
        <table className="pm-table-re-detail">
          <tr>
            <th>id</th>
            <th>Tên dự án</th>
            <th>Chủ đầu tư</th>
            <th>Chức năng</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Vinhomes</td>
            <td>Đạt</td>
            <td colspan="2">
              <button className="btn--view-pm">View</button>
              <button className="btn--delete-pm">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Salah</td>
            <td>Lâm</td>
            <td colspan="2">
              <button className="btn--view-pm">View</button>
              <button className="btn--delete-pm">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>KTX ĐHQG</td>
            <td>Ngân</td>
            <td colspan="2">
              <button className="btn--view-pm">View</button>
              <button className="btn--delete-pm">Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Valorant</td>
            <td>Bảo</td>
            <td colspan="2">
              <button className="btn--view-pm">View</button>
              <button className="btn--delete-pm">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
