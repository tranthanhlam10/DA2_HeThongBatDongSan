import React from 'react'
import './FilterBlock.css'
export default function FilterBlock(props) {
    const { filterItems, title } = props;
    return (
        <div className="filter-container">
            <div className="filter-title">
                <h1>{title}</h1>
            </div>
            <ul className="filter-list">
                {
                    filterItems.map((item, index) => {
                        return (
                            <li className="filter-item" key={index}>
                                <a href={item.link}>
                                    {item.displayName}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
