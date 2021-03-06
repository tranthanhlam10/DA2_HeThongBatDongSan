import React from "react";
import "./ProjectManagement.css";
import { useState } from "react";
import PopUpAdd from "../AddAdminPopUp/PopUpAdd.js";
import AddProjectDetail from "../AddAdminPopUp/AddProjectDetail";

export default function ProjectManagement() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="admin-pm-content">
      <div className="admin-pm-table">
        <div className="admin-pm-table-content">
          <div></div>
          <h1 className="pm-table-title">Quản lý dự án</h1>
          <button className="pm-btn-addre" onClick={() => setButtonPopup(true)}>
            <a>
              <span class="material-icons">add_circle</span>
              <p>Thêm dự án mới</p>
            </a>
          </button>
          <PopUpAdd trigger={buttonPopup} setTrigger={setButtonPopup}>
            {" "}
            <AddProjectDetail />
          </PopUpAdd>
        </div>
        {/* <div className="pm-search-bar">
          <input
            type="search"
            placeholder="Tìm dự án"
            className="pm-search-input"
          ></input>
          <button className="pm-search-button">
            <span className="material-icons">search</span>
          </button>
        </div> */}
        <table className="pm-table-re-detail">
          <tr>
            <th>id</th>
            <th>Tên dự án</th>
            <th>Chủ đầu tư</th>
            <th>Chức năng</th>
          </tr>
          <tr>
            <td>
              <a href="/admin/projectdetail">1</a>
            </td>
            <td>
              <a href="/admin/projectdetail">Vinhomes</a>
            </td>
            <td>
              <a href="/admin/projectdetail">Đạt</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/projectdetail">
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
              <a href="/admin/projectdetail">2</a>
            </td>
            <td>
              <a href="/admin/projectdetail">Sala</a>
            </td>
            <td>
              <a href="/admin/projectdetail">Lâm</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/projectdetail">
                  <span class="material-icons">search</span>
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
              <a href="/admin/projectdetail">3</a>
            </td>
            <td>
              <a href="/admin/projectdetail">DHQG</a>
            </td>
            <td>
              <a href="/admin/projectdetail">Ngân</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/projectdetail">
                  <span class="material-icons">search</span>
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
              <a href="/admin/projectdetail">4</a>
            </td>
            <td>
              <a href="/admin/projectdetail">NovaLand</a>
            </td>
            <td>
              <a href="/admin/projectdetail">Bảo</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/projectdetail">
                  <span class="material-icons">search</span>
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
