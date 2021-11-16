import React from 'react'
import './HotRealEstate.css'
export default function HotRealEstate(props) {
    const { title, hotRealEstateItems } = props;
    return (
        <div className="hot-real-estate-container">
            <div className="hot-real-estate-title">
                <h1>{title}</h1>
            </div>
            <ul className="hot-real-estate-list">
                {
                    hotRealEstateItems.map((item, index) => {
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
