import React from "react";
import "./UserManagement.css";
export default function UserManagement() {
  return (
    <div className="admin-usm-content">
      <h2 className="admin-usm-heading">ADMIN DASHBOARD</h2>
      <div className="admin-usm-table">
        <div className="admin-usm-table-content">
          <div></div>
          <h1 className="usm-table-title">Quản lý tài khoản</h1>
          <button className="usm-btn-addre">Thêm tài khoản mới</button>
        </div>
        <div className="usm-search-bar">
          <input
            type="search"
            placeholder="Tìm tài khoản"
            className="usm-search-input"
          ></input>
          <button className="usm-search-button">
            <span className="material-icons">search</span>
          </button>
        </div>
        <table className="usm-table-re-detail">
          <tr>
            <th>id</th>
            <th>Tên thường dùng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Chức năng</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Nguyễn Thành Đạt</td>
            <td>ntdat@gmail.com</td>
            <td> 123</td>
            <td colspan="2">
              <button className="btn--view-usm">View</button>
              <button className="btn--delete-usm">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Trần Thanh Lâm</td>
            <td>ttlam@gmail.com</td>
            <td> 123</td>
            <td colspan="2">
              <button className="btn--view-usm">View</button>
              <button className="btn--delete-usm">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nguyễn Thị Quỳnh Ngân</td>
            <td>ntqn@gamil.com</td>
            <td> 123</td>
            <td colspan="2">
              <button className="btn--view-usm">View</button>
              <button className="btn--delete-usm">Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lương Duy Bảo</td>
            <td>ldbao@gamil.com</td>
            <td> 123</td>
            <td colspan="2">
              <button className="btn--view-usm">View</button>
              <button className="btn--delete-usm">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
