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
            <p className="infor">Tên nhà đất: Vinhomes</p>
            <p className="infor">Giá: 15 tỷ VND</p>
            <p className="infor">Địa chỉ: Sài Gòn</p>
          </div>
          <img
            src="https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg"
            alt=""
            className="imformation__photo"
          ></img>
        </div>

        <div className="admin-red-moreinfo">
          <p className="description">Thông tin khác:</p>
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
            Beatae, laudantium eius labore molestias dolores debitis? Cum,
            veniam? Exercitationem quam expedita corrupti qui, quasi excepturi
            iusto dolorum commodi nam cupiditate magni!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Beatae, laudantium eius labore
            molestias dolores debitis? Cum, veniam? Exercitationem quam expedita
            corrupti qui, quasi excepturi iusto dolorum commodi nam cupiditate
            magni!Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="action">
            <button className="btn--accept-red">
              <a>
                <span class="material-icons">check_circle</span>
                <p>Duyệt</p>
              </a>
            </button>
            <button className="btn--refuse-red">
              <a>
                <span class="material-icons">do_disturb_on</span>
                <p>Từ chối</p>
              </a>
            </button>
            <button className="btn--delete-red">
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
