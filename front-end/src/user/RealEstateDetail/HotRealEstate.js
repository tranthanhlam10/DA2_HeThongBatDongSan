import React from 'react'
import './HotRealEstate.css'
const hotRealEstateList = [

    {
        displayName: "Nhà đất Quận 9",
        link: "/searchinglist",
    },
    {
        displayName: "Nhà đất Nam Định",
        link: "/searchinglist",
    },
    {
        displayName: "Bán nhà mặt tiền 160",
        link: "/searchinglist",
    },
    {
        displayName: "Bán nhà mặt tiền 475",
        link: "/searchinglist",
    },
    {
        displayName: "Căn hộ New City Thủ Thiêm",
        link: "/searchinglist",
    },
    {
        displayName: "Bán biệt thự Thảo Điền",
        link: "/searchinglist",
    },
    {
        displayName: "Bất động sản Vũng Tàu",
        link: "/searchinglist",
    },
];
export default function HotRealEstate(props) {

    return (
        <div className="hot-real-estate-container">
            <div className="hot-real-estate-title">
                <h1>Bất động sản nổi bật</h1>
            </div>
            <ul className="hot-real-estate-list">
                {
                    hotRealEstateList.map((item, index) => {
                        return (
                            <li key={index} className="hot-real-estate-item">
                                <a href={item.link}>
                                    {item.displayName}
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </div >
    )
}
