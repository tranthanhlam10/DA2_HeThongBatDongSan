import React from "react";
import "./AdminLeftBar.css";
import { Link } from "react-router-dom";
export default function AdminLeftbar() {
  return (
    <div className="admin-left-bar">
      <div className="lb-header">
        <a>
          <span class="material-icons">home</span>
          <span>Trang chủ </span>
        </a>
      </div>
      <div className="lb-realestate">
        <button className="dropdown-btn" onClick={Dropdown}>
          <a>
            <span className="material-icons">real_estate_agent</span>
            <span>Nhà đất</span>
          </a>
        </button>
        <div className="dropdown-container">
          <Link className="admin-option" to="/admin/realestatemanagement">
            Quản lí nhà đất
          </Link>
          <Link className="admin-option" to="/admin/realestatedetail">
            Chi tiết nhà đất
          </Link>
        </div>
      </div>
      <div className="lb-project">
        <button className="dropdown-btn" onClick={Dropdown}>
          <a>
            <span className="material-icons">villa</span>
            <span> Dự án </span>
          </a>
        </button>

        <div className="dropdown-container">
          <Link className="admin-option" to="/admin/projectmanagement">
            Quản lí dự án
          </Link>
          <Link className="admin-option" to="/admin/projectdetail">
            Chi tiết dự án
          </Link>
        </div>
      </div>
      <div className="lb-account">
        <button className="dropdown-btn" onClick={Dropdown}>
          <a>
            <span className="material-icons">account_circle</span>
            <span> Tài khoản </span>
          </a>
        </button>
        <div className="dropdown-container">
          <Link className="admin-option" to="/admin/usermanagement">
            Quản lí tài khoản
          </Link>
          <Link className="admin-option" to="/admin/userdetail">
            Chi tiết tài khoản
          </Link>
        </div>
      </div>
      <div className="lb-analytics">
        <Link className="admin-analysis" to="/admin/managestatistic">
          <span className="material-icons">analytics</span>
          <span>Thống kê</span>
        </Link>
      </div>
    </div>
  );
}

function Dropdown() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}
