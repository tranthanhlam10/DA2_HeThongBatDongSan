import React, { useState } from "react";
import "./HomeSearchBar.css";
import { Link, useHistory } from "react-router-dom";

import ReactLoading from "react-loading";

export default function HomeSearchBar() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [selectTab, setSelectTab] = useState();

  const [backgroundSell, setBackgroundSell] = useState("rgba(0,0,0,.6)");
  const [backgroundRent, setBackgroundRent] = useState("rgba(255,255,255,.6)");
  const [colorSell, setColorSell] = useState("#fff");
  const [colorRent, setColorRent] = useState("#000");
  const [isSelectSell, setIsSelectSell] = useState(true);

  const [display, setDisplay] = useState("none");
  const [areaOptionDisplay, setAreaOptionDisplay] = useState("none");
  const [priceOptionDisplay, setPriceOptionDisplay] = useState("none");
  const [squareOptionDisplay, setSquareOptionDisplay] = useState("none");
  const [projectOptionDisplay, setProjectOptionDisplay] = useState("none");
  const [directOptionDisplay, setDirectOptionDisplay] = useState("none");

  const [area, setArea] = useState("Toàn quốc")
  const [type, setType] = useState("Loại bất động sản")
  const [price, setPrice] = useState("Mức giá")
  const [square, setSquare] = useState("Diện tích")
  const [project, setProject] = useState("Dự án")
  const [direct, setDirect] = useState("Hướng")


  const [iconArrow, setIconArrow] = useState(
    <span className="material-icons">expand_more</span>
  );
  const [iconArrowArea, setIconArrowArea] = useState(
    <span className="material-icons">expand_more</span>
  );
  const [iconArrowPrice, setIconArrowPrice] = useState(
    <span className="material-icons">expand_more</span>
  );
  const [iconArrowSquare, setIconArrowSquare] = useState(
    <span className="material-icons">expand_more</span>
  );
  const [iconArrowProject, setIconArrowProject] = useState(
    <span className="material-icons">expand_more</span>
  );
  const [iconArrowDirect, setIconArrowDirect] = useState(
    <span className="material-icons">expand_more</span>
  );

  const [isAllowDropdown, setIsAllowDropdown] = useState(true);
  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      history.push("/searchinglist");
    }, 3000);
  };
  const searchBtn = (
    <button className="button-search" onClick={() => handleLoading()}>
      <span className="material-icons">search</span>
      <i className="icon-search"></i>
      <span>Tìm kiếm</span>
    </button>
  );

  const loading = (
    <button className="button-search">
      <ReactLoading type="bubbles" />
    </button>
  );

  const sellStyle = {
    background: backgroundSell,
    color: colorSell,
    // backgroundColor: this.state.backgroundColor
  };

  const rentStyle = {
    background: backgroundRent,
    color: colorRent,
  };

  const handleClickSell = () => {
    setBackgroundRent("rgba(255,255,255,.6)");
    setColorRent("#000");
    setBackgroundSell("rgba(0,0,0,.6)");
    setColorSell("#fff");
  };
  const handleClickRent = () => {
    setBackgroundSell("rgba(255,255,255,.6)");
    setColorSell("#000");
    setBackgroundRent("rgba(0,0,0,.6)");
    setColorRent("#fff");
  };

  const handleDisplay = () => {
    if (display === "none" && isAllowDropdown) {
      setDisplay("block");
      setIconArrow(<span className="material-icons">expand_less</span>);
      setIsAllowDropdown(false);
    }
    if (display === "block" && !isAllowDropdown) {
      setDisplay("none");
      setIconArrow(<span className="material-icons">expand_more</span>);
      setIsAllowDropdown(true);
    }
  };

  const handleDisplayArea = () => {
    if (areaOptionDisplay === "none" && isAllowDropdown) {
      setAreaOptionDisplay("block");
      setIconArrowArea(<span className="material-icons">expand_less</span>);
      setIsAllowDropdown(false);
    }
    if (areaOptionDisplay === "block" && !isAllowDropdown) {
      setAreaOptionDisplay("none");
      setIconArrowArea(<span className="material-icons">expand_more</span>);
      setIsAllowDropdown(true);
    }
  };
  const handleDisplayPrice = () => {
    if (priceOptionDisplay === "none" && isAllowDropdown) {
      setPriceOptionDisplay("block");
      setIconArrowPrice(<span className="material-icons">expand_less</span>);
      setIsAllowDropdown(false);
    }
    if (priceOptionDisplay === "block" && !isAllowDropdown) {
      setPriceOptionDisplay("none");
      setIconArrowPrice(<span className="material-icons">expand_more</span>);
      setIsAllowDropdown(true);
    }
  };
  const handleDisplaySquare = () => {
    if (squareOptionDisplay === "none" && isAllowDropdown) {
      setSquareOptionDisplay("block");
      setIconArrowSquare(<span className="material-icons">expand_less</span>);
      setIsAllowDropdown(false);
    }
    if (squareOptionDisplay === "block" && !isAllowDropdown) {
      setSquareOptionDisplay("none");
      setIconArrowSquare(<span className="material-icons">expand_more</span>);
      setIsAllowDropdown(true);
    }
  };

  const handleDisplayProject = () => {
    if (projectOptionDisplay === "none" && isAllowDropdown) {
      setProjectOptionDisplay("block");
      setIconArrowProject(<span className="material-icons">expand_less</span>);
      setIsAllowDropdown(false);
    }
    if (projectOptionDisplay === "block" && !isAllowDropdown) {
      setProjectOptionDisplay("none");
      setIconArrowProject(<span className="material-icons">expand_more</span>);
      setIsAllowDropdown(true);
    }
  };

  const handleDisplayDirect = () => {
    if (directOptionDisplay === "none" && isAllowDropdown) {
      setDirectOptionDisplay("block");
      setIconArrowDirect(<span className="material-icons">expand_less</span>);
      setIsAllowDropdown(false);
    }
    if (directOptionDisplay === "block" && !isAllowDropdown) {
      setDirectOptionDisplay("none");
      setIconArrowDirect(<span className="material-icons">expand_more</span>);
      setIsAllowDropdown(true);
    }
  };
  const typeReList = [
    {
      displayName: "Tất cả nhà đất",
    },
    {
      displayName: "Căn hộ chung cư",
    },
    {
      displayName: "Nhà trọ",
    },
    {
      displayName: "Nhà riêng",
    },
    {
      displayName: "Nhà biệt thự, liền kề",
    },
    {
      displayName: "Nhà mặt phố",
    },
    {
      displayName: "Các loại đất bán",
    },
  ];

  const cityItems = [
    {
      displayName: "Tất cả",
    },
    {
      displayName: "Hồ Chí Minh",
    },
    {
      displayName: "Hà Nội",
    },
    {
      displayName: "Đồng Nai",
    },
    {
      displayName: "Ninh Thuận",
    },
    {
      displayName: "Bến Tre",
    },
    {
      displayName: "Long An",
    },
    {
      displayName: "Vũng Tàu",
    },
    {
      displayName: "Đồng Tháp",
    },
    {
      displayName: "Cà Mau",
    },
  ];
  const priceItems = [
    {
      displayName: "Tất cả",
    },
    {
      displayName: "Dưới 5 triệu",
    },
    {
      displayName: "5 -> 10 triệu",
    },
    {
      displayName: "10 -> 50 triệu",
    },
    {
      displayName: "50 -> 100 triệu",
    },
    {
      displayName: "100 triệu -> 1 tỷ",
    },
    {
      displayName: "1 -> 2 tỷ",
    },
    {
      displayName: "2 -> 5 tỷ",
    },
    {
      displayName: "5 -> 10 tỷ",
    },
  ];

  const squareItems = [
    {
      displayName: "Tất cả",
    },
    {
      displayName: "Dưới 30 m2",
    },
    {
      displayName: "30 -> 50 m2",
    },
    {
      displayName: "50 -> 80 m2",
    },
    {
      displayName: "80 -> 100 m2",
    },
    {
      displayName: "100 -> 150 m2",
    },
    {
      displayName: "150 -> 300",
    },
    {
      displayName: "300 -> 500 m2",
    },
    {
      displayName: "Trên 500 m2",
    },
  ];

  const projectItems = [
    {
      displayName: "Vinahomes",
    },
    {
      displayName: "Saigon",
    },
    {
      displayName: "Masterise",
    },
    {
      displayName: "Manhattan",
    },
  ];
  const directItems = [
    {
      displayName: "Đông",
    },
    {
      displayName: "Tây",
    },
    {
      displayName: "Nam",
    },
    {
      displayName: "Bắc",
    },
    {
      displayName: "Đông-Bắc",
    },
    {
      displayName: "Tây-Bắc",
    },
    {
      displayName: "Tây-Nam",
    },
    {
      displayName: "Đông-Nam",
    },
  ];
  return (
    <div className="search-banner">
      <iframe
        src="https://cdn.houseviet.vn/banner/HouseViet/index.html?v=1.1.1%22"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
      ></iframe>
      <div className="search-tab-form">
        <div className="search-tab">
          <div
            className="search-tab-buying"
            style={sellStyle}
            onClick={handleClickSell}
          >
            Nhà đất bán
          </div>
          <div
            className="search-tab-rent"
            style={rentStyle}
            onClick={handleClickRent}
          >
            Nhà đất cho thuê
          </div>
        </div>
        <div className="search-form">
          <div className="searching-bar">
            <div className="realestate-type-btn" onClick={handleDisplay}>
              <div className="option-box">{type}</div>
              <div className="option-label">{iconArrow}</div>
              <div className="re-style-dropdown" style={{ display: display }}>
                <ul className="re-style-list">
                  {typeReList.map((item, index) => {
                    return (
                      <li className="re-style-item" key={index} onClick={() => setType(item.displayName)}>
                        {item.displayName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="option-icon">
              <Link></Link>
            </div>
            <div className="option-search">
              <Link></Link>
            </div>
            <input
              className="search-input"
              placeholder="Nhập địa điểm hoặc dự án"
            ></input>
            {isLoading ? loading : searchBtn}
          </div>

          <div className="searching-option">
            <div className="home-searchbar-option" onClick={handleDisplayArea}>
              <span>{area}</span>
              {iconArrowArea}
              <div
                className="option-search-dropdown"
                style={{ display: areaOptionDisplay }}
              >
                <ul className="option-search-list">
                  {cityItems.map((item, index) => {
                    return (
                      <li className="option-search-item" key={index} onClick={() => setArea(item.displayName)}>
                        {item.displayName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="home-searchbar-option" onClick={handleDisplayPrice}>
              <span>{price}</span>
              {iconArrowPrice}
              <div
                className="option-search-dropdown"
                style={{ display: priceOptionDisplay }}
              >
                <ul className="option-search-list">
                  {priceItems.map((item, index) => {
                    return (
                      <li className="option-search-item" key={index} onClick={() => setPrice(item.displayName)}>
                        {item.displayName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="home-searchbar-option"
              onClick={handleDisplaySquare}
            >
              <span>{square}</span>
              {iconArrowSquare}
              <div
                className="option-search-dropdown"
                style={{ display: squareOptionDisplay }}
              >
                <ul className="option-search-list">
                  {squareItems.map((item, index) => {
                    return (
                      <li className="option-search-item" key={index} onClick={() => setSquare(item.displayName)}>
                        {item.displayName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="home-searchbar-option"
              onClick={handleDisplayProject}
            >
              <span>{project}</span>
              {iconArrowProject}
              <div
                className="option-search-dropdown"
                style={{ display: projectOptionDisplay }}
              >
                <ul className="option-search-list">
                  {projectItems.map((item, index) => {
                    return (
                      <li className="option-search-item" key={index} onClick={() => setProject(item.displayName)}>
                        {item.displayName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="home-searchbar-option"
              onClick={handleDisplayDirect}
            >
              <span>{direct}</span>
              {iconArrowDirect}
              <div
                className="option-search-dropdown"
                style={{ display: directOptionDisplay }}
              >
                <ul className="option-search-list">
                  {directItems.map((item, index) => {
                    return (
                      <li className="option-search-item" key={index} onClick={() => setDirect(item.displayName)}>
                        {item.displayName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
