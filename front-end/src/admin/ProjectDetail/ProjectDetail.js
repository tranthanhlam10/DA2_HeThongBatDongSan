import React, { useState } from "react";
import "./ProjectDetail.css";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  const [address, setAddress] = useState("Sài Gòn")
  const [owner, setOwner] = useState("Nguyễn Thành Đạt")
  const [projectName, setProjectName] = useState("Vinhomes")
  const [disable, setDisable] = useState(true)
  const [background, setBackground] = useState("rgba(17, 231, 17, .2)")
  const handleChangeAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleChangeOwnver = (e) => {
    setOwner(e.target.value)
  }
  const handleChangeProjectName = (e) => {
    setProjectName(e.target.value)
  }

  return (
    <div className="admin-pd-content">
      <h1 className="admin-pd-header">Chi tiết dự án</h1>
      <div className="admin-pd-content-detail">
        <div className="admin-pd-detail">
          <div className="admin-pd-information">
            <div className="admin-pd-detail-name">
              <p>Tên dự án</p>
              <input placeholder="Nhập tên dự án" value={projectName} onChange={(e) => { handleChangeProjectName(e); setDisable(false); setBackground("rgba(17, 231, 17, 0.685)") }}></input>
            </div>
            <div className="admin-pd-detail-owner">
              <p>Chủ đầu tư</p>
              <input
                placeholder="Nhập chủ đầu tư"
                value={owner}
                onChange={(e) => { handleChangeOwnver(e); setDisable(false); setBackground("rgba(17, 231, 17, 0.685)") }}
              ></input>
            </div>
            <div className="admin-pd-detail-address">
              <p>Địa chỉ</p>
              <input placeholder="Nhập địa chỉ" value={address} onChange={(e) => { handleChangeAddress(e); setDisable(false); setBackground("rgba(17, 231, 17, 0.685)") }}></input>
            </div>
          </div>
          <img
            src="https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg"
            alt=""
            className="imformation__photo"
            height="250px"
            width="300px"
          ></img>
        </div>

        <div className="admin-pd-moreinfo">
          <p className="description">Thông tin mô tả:</p>
          <p>
            Quy mô dự án Vinhomes Central Park bao gồm 3 phân khu cao tầng: phân
            khu The Central, phân khu The Landmark và phân khu The Park với 17
            tòa căn hộ. Đây dòng sản phẩm phù hợp với những khách hàng có tài
            chính tốt, mong muốn trải nghiệm cuộc sống cao cấp tại trung tâm Sài
            Gòn. Là loại hình được quy hoạch và phát triển chủ đạo tại khu đô
            thị Vinhomes Central Park, các căn hộ thuộc phân khu cao tầng có
            diện tích đa dạng từ 36 - 500m2, chia thành các loại: 1, 2, 3, 4
            phòng ngủ, penthouse, căn hộ thông tầng, sky villa (chỉ có tại tòa
            Landmark 81).
          </p>
          <div className="action">
            <button className="btn--save-pd" onClick={SaveNofication} disabled={disable} style={{ "background": background }}>
              <a>
                <span class="material-icons">archive</span>
                <p>Lưu</p>
              </a>
            </button>
            <button className="btn--delete-pd" onClick={DeleteNofication}>
              <a>
                <span class="material-icons">delete</span>
                <p>Xóa</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DeleteNofication() {
  alert("Xóa thành công");
}

function SaveNofication() {
  alert("Lưu thành thành công");
}
