import React from "react";
import "./ProjectDetail.css";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  return (
    <div className="admin-pd-content">
      <h1 className="admin-pd-header">Chi tiết dự án</h1>
      <div className="admin-pd-content-detail">
        <div className="admin-pd-detail">
          <div className="admin-pd-information">
            <p className="infor">Tên dự án: Vinhomes</p>
            <p className="infor">Chủ đầu tư: Đạt</p>
            <p className="infor">Địa chỉ: Sài Gòn</p>
          </div>
          <img
            src="https://cdn.houseviet.vn/images/project/20102021/the-beverly-s.jpg"
            alt=""
            className="imformation__photo"
          ></img>
        </div>

        <div className="admin-pd-moreinfo">
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
            Beatae, laudantium eius labore molestias dolores debitis? Cum,
            veniam? Exercitationem quam expedita corrupti qui, quasi excepturi
            iusto dolorum commodi nam cupiditate magni!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Beatae, laudantium eius labore
            molestias dolores debitis? Cum, veniam? Exercitationem quam expedita
            corrupti qui, quasi excepturi iusto dolorum commodi nam cupiditate
            magni!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae, laudantium eius labore molestias dolores debitis? Cum,
            veniam? Exercitationem quam expedita corrupti qui, quasi excepturi
            iusto dolorum commodi nam cupiditate magni!
          </p>
          <div className="action">
            <button className="btn--save-pd">
              <a>
                <span class="material-icons">archive</span>
                <p>Lưu</p>
              </a>
            </button>
            <button className="btn--delete-pd">
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
