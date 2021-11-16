import React from 'react'
import './HotLocation.css'
export default function HotLocation(props) {
    const { title, hotLocationItems } = props;
    return (
        <div className="hot-location-container">
            <div className="hot-location-title">
                <h1>{title}</h1>
            </div>
            <ul className="hot-location-list">
                {
                    hotLocationItems.map((item, index) => {
                        return (
                            <li key={index} className="hot-location-item">
                                <a href={item.link}>
                                    {item.displayName}
                                    <span>
                                        ({item.num})
                                    </span>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div >
    )
}
