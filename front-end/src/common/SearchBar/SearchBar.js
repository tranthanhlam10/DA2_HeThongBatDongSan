import React, { useState } from "react";
import "./SearchBar.css";
import ReactLoading from "react-loading";
import { Link, useHistory } from "react-router-dom";
const cityItems = [
  {
    itemName: "Tất cả",
  },
  {
    itemName: "Hồ Chí Minh",
  },
  {
    itemName: "Hà Nội",
  },
  {
    itemName: "Đồng Nai",
  },
  {
    itemName: "Ninh Thuận",
  },
  {
    itemName: "Bến Tre",
  },
  {
    itemName: "Long An",
  },
  {
    itemName: "Vũng Tàu",
  },
  {
    itemName: "Đồng Tháp",
  },
  {
    itemName: "Cà Mau",
  },
];
const priceItems = [
  {
    itemName: "Tất cả",
  },
  {
    itemName: "Dưới 500 triệu",
  },
  {
    itemName: "500 -> 1 tỷ",
  },
  {
    itemName: "1 -> 2 tỷ",
  },
  {
    itemName: "2 -> 3 tỷ",
  },
  {
    itemName: "3 -> 5 tỷ",
  },
  {
    itemName: "5 -> 7 tỷ",
  },
  {
    itemName: "7 -> 10 tỷ",
  },
  {
    itemName: "10 -> 20 tỷ",
  },
];
const squareItems = [
  {
    itemName: "Tất cả",
  },
  {
    itemName: "Dưới 30 m2",
  },
  {
    itemName: "30 -> 50 m2",
  },
  {
    itemName: "50 -> 80 m2",
  },
  {
    itemName: "80 -> 100 m2",
  },
  {
    itemName: "100 -> 150 m2",
  },
  {
    itemName: "150 -> 300",
  },
  {
    itemName: "300 -> 500 m2",
  },
  {
    itemName: "Trên 500 m2",
  },
];

const projectItems = [
  {
    itemName: "Vinahomes Golden River",
  },
  {
    itemName: "Saigon Centre",
  },
  {
    itemName: "Dự án Masterise Ba Son",
  },
  {
    itemName: "The Grand Manhattan",
  },
]

const wardItems = [
  {
    itemName: "Quận 1",
  },
  {
    itemName: "Quận 2",
  },
  {
    itemName: "Quận Tân Bình",
  },
  {
    itemName: "Quận Phú Nhận",
  },
  {
    itemName: "Quận Bình Chánh",
  },
  {
    itemName: "Quận 5",
  },
  {
    itemName: "Quận 10",
  },
  {
    itemName: "Quận 9",
  },
]
const streetItems = [
  {
    itemName: "Đường Đinh Tiên Hoàng",
  },
  {
    itemName: "Đường Âu Cơ",
  },
  {
    itemName: "Đường Lạc Long Quân",
  },
  {
    itemName: "Đường Cách mạng tháng 8",
  },
  {
    itemName: "Đường Nguyễn Du",
  },
  {
    itemName: "Đường Võ Thị Sáu",
  },
  {
    itemName: "Đường Bùi Hữu Nghĩa",
  },
  {
    itemName: "Đường Lý Thái Tổ",
  },
]

export default function SearchBar() {
  const history = useHistory()

  const [displayPrice, setDisplayPrice] = useState('Tất cả')
  const [displayCity, setDisplayCity] = useState('Tất cả')
  const [displaySquare, setDisplaySquare] = useState('Tất cả')
  const [displayProject, setDisplayProject] = useState('Tất cả')
  const [displayWard, setDisplayWard] = useState('Tất cả')
  const [displayStreet, setDisplayStreet] = useState('Tất cả')
  const [isLoading, setIsLoading] = useState(false)
  const handleReset = (e) => {
    e.preventDefault()
    setDisplayPrice('Tất cả')
    setDisplayCity('Tất cả')
    setDisplaySquare('Tất cả')
    setDisplayProject('Tất cả')
    setDisplayWard('Tất cả')
    setDisplayStreet('Tất cả')
  }

  const handleLoading = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      history.push('/searchinglist')
    }, 3000)
  }

  const searchBtn = <button className="search-btn" onClick={handleLoading}>
    <span className="material-icons">search</span>
    <p1>Tìm kiếm</p1>
  </button>

  const loading = <button className="search-btn">
    <ReactLoading type="bubbles" />
  </button>

  return (
    <div className="searchbar">
      <form action="" className="search-input">
        <div className="input-container">
          <span className="material-icons">search</span>
          <input placeholder="Nhập địa điểm hoặc dự án..." type="text"></input>
        </div>
        <div className="option-container">
          <div className="option-label">
            <p>Khu vực</p>
            <span className="material-icons">
              expand_more
            </span>
          </div>
          <div className="option-section">{displayCity}</div>
          <div className="option-list-container">
            <ul className="option-list">
              {
                cityItems.map((item, index) => {
                  return (
                    <li key={index} onClick={() => setDisplayCity(item.itemName)} className="option-item">
                      <div className="option-item-name">{item.itemName}</div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div >
        <div className="option-container">
          <div className="option-label">
            <p>Mức giá</p>
            <span className="material-icons">
              expand_more
            </span>
          </div>
          <div className="option-section">{displayPrice}</div>
          <div className="option-list-container">
            <ul className="option-list">
              {
                priceItems.map((item, index) => {
                  return (
                    <li key={index} onClick={() => setDisplayPrice(item.itemName)} className="option-item">
                      <div className="option-item-name">{item.itemName}</div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div >
        <div className="option-container">
          <div className="option-label">
            <p>Diện tích</p>
            <span className="material-icons">
              expand_more
            </span>
          </div>
          <div className="option-section">{displaySquare}</div>
          <div className="option-list-container">
            <ul className="option-list">
              {
                squareItems.map((item, index) => {
                  return (
                    <li key={index} onClick={() => setDisplaySquare(item.itemName)} className="option-item">
                      <div className="option-item-name">{item.itemName}</div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div >
        <div className="option-container">
          <div className="option-label">
            <p>Dự án</p>
            <span className="material-icons">
              expand_more
            </span>
          </div>
          <div className="option-section">{displayProject}</div>
          <div className="option-list-container">
            <ul className="option-list">
              {
                projectItems.map((item, index) => {
                  return (
                    <li key={index} onClick={() => setDisplayProject(item.itemName)} className="option-item">
                      <div className="option-item-name">{item.itemName}</div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div >
        <div className="option-container">
          <div className="option-label">
            <p>Phường/Xã</p>
            <span className="material-icons">
              expand_more
            </span>
          </div>
          <div className="option-section">{displayWard}</div>
          <div className="option-list-container">
            <ul className="option-list">
              {
                wardItems.map((item, index) => {
                  return (
                    <li key={index} onClick={() => setDisplayWard(item.itemName)} className="option-item">
                      <div className="option-item-name">{item.itemName}</div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div >
        <div className="option-container">
          <div className="option-label">
            <p>Đường phố</p>
            <span className="material-icons">
              expand_more
            </span>
          </div>
          <div className="option-section">{displayStreet}</div>
          <div className="option-list-container">
            <ul className="option-list">
              {
                streetItems.map((item, index) => {
                  return (
                    <li key={index} onClick={() => setDisplayStreet(item.itemName)} className="option-item">
                      <div className="option-item-name">{item.itemName}</div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div >


        {isLoading ? loading : searchBtn}
        <button className="reset-btn" onClick={handleReset}>
          <span className="material-icons reset-icon">delete</span>
          <div className="reset-tooltip-container">
            <div className="reset-tooltip-content">
              Xóa tiêu chí lọc
              <span className="reset-top-delta">
              </span>
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}
