import React from "react";
import "./RealEstateManagement.css";
import { useState } from "react";
import PopUpAdd from "../AddAdminPopUp/PopUpAdd.js";
import AddRealEstateDetail from "../AddAdminPopUp/AddRealEstateDetail";
export default function RealEstateManagement() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="admin-rem-content">

      <div className="admin-rem-table">
        <div className="admin-rem-table-content">
          <div></div>
          <h1 className="rem-table-title">Quản lý nhà đất</h1>
          <button
            className="rem-btn-addre"
            onClick={() => setButtonPopup(true)}
          >
            <a>
              <span class="material-icons">add_circle</span>
              <p>Thêm nhà đất mới</p>
            </a>
          </button>
          <PopUpAdd trigger={buttonPopup} setTrigger={setButtonPopup}>
            {" "}
            <AddRealEstateDetail />
          </PopUpAdd>
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
            <td>
              {" "}
              <a href="/admin/realestatedetail">1</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">Vinhomes</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">15 Tỷ</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">Sài Gòn</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/realestatedetail">
                  <span class="material-icons">pageview</span>
                  <span>View</span>
                </a>
              </button>

              <button className="btn--delete-rem" onClick={DeleteNofication}>
                <a>
                  <span class="material-icons">delete</span>
                  <span>Delete</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <a href="/admin/realestatedetail">2</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">Sala</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">29 Tỷ</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">Sài Gòn</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/realestatedetail">
                  <span class="material-icons">pageview</span>
                  <span>View</span>
                </a>
              </button>

              <button className="btn--delete-rem" onClick={DeleteNofication}>
                <a>
                  <span class="material-icons">delete</span>
                  <span>Delete</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <a href="/admin/realestatedetail">3</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">KTX DHQG</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">35 Tỷ</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">Bình Dương</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/realestatedetail">
                  <span class="material-icons">pageview</span>
                  <span>View</span>
                </a>
              </button>

              <button className="btn--delete-rem" onClick={DeleteNofication}>
                <a>
                  <span class="material-icons">delete</span>
                  <span>Delete</span>
                </a>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <a href="/admin/realestatedetail">5</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">Suối tiên</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">20 Tỷ</a>
            </td>
            <td>
              <a href="/admin/realestatedetail">Đồng Nai</a>
            </td>
            <td colspan="2" className="admin-btn-function">
              <button className="btn--view-rem">
                <a href="/admin/realestatedetail">
                  <span class="material-icons">pageview</span>
                  <span>View</span>
                </a>
              </button>

              <button className="btn--delete-rem" onClick={DeleteNofication}>
                <a>
                  <span class="material-icons">delete</span>
                  <span>Delete</span>
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
