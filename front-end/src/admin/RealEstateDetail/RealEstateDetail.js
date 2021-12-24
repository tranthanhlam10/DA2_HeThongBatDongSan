import React from "react";
import "./RealEstateDetail.css";
import { Link } from "react-router-dom";

export default function RealEstateDetail() {
  return (
    <div className="admin-red-content">
      <h1 className="admin-red-header">Chi tiết nhà đất</h1>
      <div className="admin-red-content-detail">
        <div className="admin-red-detail">
          <div className="admin-red-information">
            <div className="admin-red-detail-name">
              <p>Tên nhà đất</p>
              <input placeholder="Nhập nhà đất" value="Vinhomes"></input>
            </div>
            <div className="admin-red-detail-owner">
              <p>Giá</p>
              <input placeholder="Nhập chủ đầu tư" value="Giá"></input>
            </div>
            <div className="admin-red-detail-address">
              <p>Địa chỉ</p>
              <input placeholder="Nhập địa chỉ" value="Sài Gòn"></input>
            </div>
            <div className="admin-red-detail-status">
              <p>Tình trạng</p>
              <input placeholder="Status" value="Đang chờ duyệt"></input>
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

        <div className="admin-red-moreinfo">
          <p className="description">Thông tin khác:</p>
          <p>
            Phân phối từ chủ đầu tư căn hộ Vinhomes chính chủ 1 - 2 - 3 - 4
            phòng ngủ, cập nhật liên tục hàng ngày, thủ tục pháp lý minh bạch rõ
            ràng, sổ hồng sở hữu lâu dài, có thể dọn vào ở ngay lập tức, hỗ trợ
            đi xem nhanh chóng và miễn phí.
          </p>

          <div className="action">
            <button className="btn--accept-red" onClick={ApproveNofication}>
              <a>
                <span class="material-icons">check_circle</span>
                <p>Duyệt</p>
              </a>
            </button>
            <button className="btn--refuse-red" onClick={RefuseNofication}>
              <a>
                <span class="material-icons">do_disturb_on</span>
                <p>Từ chối</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApproveNofication() {
  alert("Phê duyệt thành công");
}

function RefuseNofication() {
  alert("Từ chối thành công");
}

function DeleteNofication() {
  alert("Xóa thành công");
}
