import React from 'react'
import './NearRealEstate.css'
const nearItems = [
    {
        displayName: "Hiệp Phú",
        num: "5",
        link: "/searchinglist",
    },
    {
        displayName: "Long Thạnh Mỹ",
        num: "3",
        link: "/searchinglist",
    },
    {
        displayName: "Phú Hữu",
        num: "5",
        link: "/searchinglist",
    },
    {
        displayName: "Phước Bình",
        num: "3",
        link: "/searchinglist",
    },
    {
        displayName: "Phướng Long A",
        num: "4",
        link: "/searchinglist",
    },
    {
        displayName: "Phướng Long B",
        num: "13",
        link: "/searchinglist",
    },
    {
        displayName: "Trường Thạnh",
        num: "3",
        link: "/searchinglist",
    },
]
export default function NearRealEstate(props) {
    return (
        <div className="near-container">
            <div className="near-title">
                <h1>Bất động sản gần khu vực đang xem</h1>
            </div>
            <ul className="near-list">
                {
                    nearItems.map((item, index) => {
                        return (
                            <li key={index} className="near-item">
                                <a href={item.link}>
                                    {item.displayName}
                                    <span>
                                        ({item.num})
                                    </span>
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        </div >
    )
}
