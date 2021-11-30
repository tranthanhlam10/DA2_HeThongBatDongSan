import React from 'react'
import './HotRealEstate.css'
const hotRealEstateList = [

    {
        displayName: "Nhà đất Thuận An",
        link: "",
    },
    {
        displayName: "Nhà đất Thuận An",
        link: "",
    },
    {
        displayName: "Nhà đất Thuận An",
        link: "",
    },
    {
        displayName: "Nhà đất Thuận An",
        link: "",
    },
    {
        displayName: "Nhà đất Thuận An",
        link: "",
    },
    {
        displayName: "Nhà đất Thuận An",
        link: "",
    },
    {
        displayName: "Nhà đất Thuận An",
        link: "",
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
