import React from 'react'
import './NearRealEstate.css'
export default function NearRealEstate(props) {
    const { title, nearItems } = props;
    return (
        <div className="near-container">
            <div className="near-title">
                <h1>{title}</h1>
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
