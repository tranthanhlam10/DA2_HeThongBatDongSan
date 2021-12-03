import React from "react";
import "./UserDetail.css";
export default function UserDetail() {
  return (
    <div className="admin-usd-content">
      <h1 className="admin-usd-header">Chi tiết tài khoản</h1>
      <div className="admin-usd-content-detail">
        <div className="admin-usd-detail">
          <div className="admin-usd-information">
            <div className="admin-usd-detail-name">
              <p>Người dùng</p>
              <input
                placeholder="Nhập tên người dùng"
                value="Nguyễn Thành Đạt"
              ></input>
            </div>
            <div className="admin-usd-detail-email">
              <p>Email</p>
              <input
                placeholder="Nhập địa chỉ mail"
                value="ntdat@gmail.com"
              ></input>
            </div>
            <div className="admin-usd-detail-address">
              <p>Địa chỉ</p>
              <input placeholder="Nhập địa chỉ" value="Bà Rịa Vũng Tàu"></input>
            </div>
          </div>
          <img
            src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg"
            alt=""
            className="imformation__photo"
            height="300px"
            width="300px"
          ></img>
        </div>

        <div className="admin-usd-moreinfo">
          <p className="description">Thông tin mô tả:</p>
          <p>
            Nguyễn Thành Đạt là một doanh nhân và tỷ phú, hiện là Chủ tịch tập
            đoàn Vingroup. Ông được xem là tỷ phú đô la Mỹ đầu tiên trên sàn
            chứng khoán Việt Nam từ ngày 7 tháng 3 năm 2011 với giá trị tài sản
            lên đến khoảng 21.200 tỷ đồng Việt Nam tương đương 1 tỷ đô la Mỹ tại
            thời điểm đó. Phạm Nhật Vượng là người cực kỳ kín tiếng, nhưng vô
            cùng nổi tiếng.
          </p>
          <ul className="re-description">
            {" "}
            Danh sách nhà đất sở hữu:
            <li>Vinhome</li>
            <li>Sala</li>
            <li>Nova</li>
          </ul>
          <div className="action">
            <button className="btn--accept-usd">
              <a>
                <span class="material-icons">archive</span>
                <p>Lưu</p>
              </a>
            </button>
            <button className="btn--delete-usd">
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
