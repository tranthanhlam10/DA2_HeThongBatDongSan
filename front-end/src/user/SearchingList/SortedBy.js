import React, { useState } from 'react'
import './SortedBy.css'
import { Link } from 'react-router-dom'
const sortItems = [
    {
        displayName: 'Mới nhất',
    },
    {
        displayName: 'Giá cao nhất',
    },
    {
        displayName: 'Giá thấp nhất',
    },
]
export default function SortedBy() {
    const [display, setDisplay] = useState('Sắp xếp theo')
    return (
        <div className="sort-control">
            <div className="filter-header">
                {display}
                <span className="material-icons">
                    expand_more
                </span>
                <ul className="sorted-list">

                    {
                        sortItems.map((item, index) => {
                            return (
                                <li className="sorted-item" key={index} onClick={() => setDisplay(item.displayName)}>
                                    <span>{item.displayName}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}
