import React from "react";
import "./UserManagement.css";
import { useState } from "react";
import PopUpAdd from "../AddAdminPopUp/PopUpAdd.js";
import AddUserDetail from "../AddAdminPopUp/AddUserDetail";
export default function UserManagement() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="admin-usm-content">

      <div className="admin-usm-table">
        <div className="admin-usm-table-content">
          <div></div>
          <h1 className="usm-table-title">Quản lý tài khoản</h1>
          <button
            className="usm-btn-addre"
            onClick={() => setButtonPopup(true)}
          >
            <a>
              <span class="material-icons">add_circle</span>
              <p>Thêm tài khoản mới</p>
            </a>
          </button>
        </div>
        {/* <div className="usm-search-bar">
          <input
            type="search"
            placeholder="Tìm tài khoản"
            className="usm-search-input"
          ></input>
          <button className="usm-search-button">
            <span className="material-icons">search</span>
          </button>
          <PopUpAdd trigger={buttonPopup} setTrigger={setButtonPopup}>
            {" "}
            <AddUserDetail />
          </PopUpAdd>
        </div> */}
        <table className="usm-table-re-detail">
          <tr>
            <th>id</th>
            <th>Tên thường dùng</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Chức năng</th>
          </tr>
          <tr>
            <td>
              <a href="/admin/userdetail">1</a>
            </td>
            <td>
              {" "}
              <a href="/admin/userdetail">Nguyễn Thành Đạt</a>
            </td>
            <td>
              <a href="/admin/userdetail">ntdat@gamil.com</a>
            </td>
            <td>
              {" "}
              <a href="/admin/userdetail">123</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/userdetail">
                  <span class="material-icons">
                    search
                  </span>
                  <span>Xem</span>
                </a>
              </button>

              <button className="btn--delete-rem" onClick={DeleteNofication}>
                <a>
                  <span class="material-icons">delete</span>
                  <span>Xóa</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/admin/userdetail">2</a>
            </td>
            <td>
              {" "}
              <a href="/admin/userdetail">Trần Thanh Lâm</a>
            </td>
            <td>
              <a href="/admin/userdetail">ttlam@gamil.com</a>
            </td>
            <td>
              {" "}
              <a href="/admin/userdetail">456</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/userdetail">
                  <span class="material-icons">
                    search
                  </span>
                  <span>Xem</span>
                </a>
              </button>

              <button className="btn--delete-rem" onClick={DeleteNofication}>
                <a>
                  <span class="material-icons">delete</span>
                  <span>Xóa</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/admin/userdetail">3</a>
            </td>
            <td>
              {" "}
              <a href="/admin/userdetail">Nguyễn Thị Quỳnh Ngân</a>
            </td>
            <td>
              <a href="/admin/userdetail">ntqngan@gamil.com</a>
            </td>
            <td>
              {" "}
              <a href="/admin/userdetail">8910</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/userdetail">
                  <span class="material-icons">
                    search
                  </span>
                  <span>Xem</span>
                </a>
              </button>

              <button className="btn--delete-rem" onClick={DeleteNofication}>
                <a>
                  <span class="material-icons">delete</span>
                  <span>Xóa</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/admin/userdetail">4</a>
            </td>
            <td>
              {" "}
              <a href="/admin/userdetail">Lương Duy Bảo</a>
            </td>
            <td>
              <a href="/admin/userdetail">ldbao@gamil.com</a>
            </td>
            <td>
              {" "}
              <a href="/admin/userdetail">111213</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/userdetail">
                  <span class="material-icons">
                    search
                  </span>
                  <span>Xem</span>
                </a>
              </button>

              <button className="btn--delete-rem" onClick={DeleteNofication}>
                <a>
                  <span class="material-icons">delete</span>
                  <span>Xóa</span>
                </a>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function DeleteNofication() {
  alert("Xóa thành công");
}
