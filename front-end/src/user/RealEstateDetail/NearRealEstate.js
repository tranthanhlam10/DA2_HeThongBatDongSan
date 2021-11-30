import React from 'react'
import './NearRealEstate.css'
const nearItems = [
    {
        displayName: "Astra City",
        num: "19",
        link: "",
    },
    {
        displayName: "Astra City",
        num: "19",
        link: "",
    },
    {
        displayName: "Astra City",
        num: "19",
        link: "",
    },
    {
        displayName: "Astra City",
        num: "19",
        link: "",
    },
    {
        displayName: "Astra City",
        num: "19",
        link: "",
    },
    {
        displayName: "Astra City",
        num: "19",
        link: "",
    },
    {
        displayName: "Astra City",
        num: "19",
        link: "",
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
