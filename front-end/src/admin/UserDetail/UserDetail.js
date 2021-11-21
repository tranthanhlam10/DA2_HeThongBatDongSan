import React from "react";
import "./UserDetail.css";
export default function UserDetail() {
  return (
    <div className="admin-usd-content">
      <h1 className="admin-usd-header">Chi tiết tài khoản</h1>
      <div className="admin-usd-content-detail">
        <div className="admin-usd-detail">
          <div className="admin-usd-information">
            <p className="infor">Tên người dùng: Nguyễn Thành Đạt</p>
            <p className="infor">Email: ntdat@gmail.com</p>
            <p className="infor">Địa chỉ: 123</p>
          </div>
          <img
            src="https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg"
            alt=""
            className="imformation__photo"
          ></img>
        </div>

        <div className="admin-usd-moreinfo">
          <p className="description">Thông tin mô tả:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            laudantium eius labore molestias dolores debitis? Cum, veniam?
            Exercitationem quam expedita corrupti qui, quasi excepturi iusto
            dolorum commodi nam cupiditate magni!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae, laudantium eius labore
            molestias dolores debitis? Cum, veniam? Exercitationem quam expedita
            corrupti qui, quasi excepturi iusto dolorum commodi nam cupiditate
            magni!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae, laudantium eius labore molestias dolores debitis? Cum,
            veniam? Exercitationem quam expedita corrupti qui, quasi excepturi
            iusto dolorum commodi nam cupiditate magni!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Beatae, laudantium eius labore
            molestias dolores debitis? Cum, veniam? Exercitationem quam expedita
            corrupti qui, quasi excepturi iusto dolorum commodi nam cupiditate
            magni!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <ul className="re-description">
            {" "}
            Danh sách nhà đất sở hữu:
            <li>Vinhome</li>
            <li>Sala</li>
            <li>Nova</li>
          </ul>
          <div className="action">
            <button className="btn--accept-usd">Lưu</button>
            <button className="btn--delete-usd">Xóa</button>
          </div>
        </div>
      </div>
    </div>
  );
}
