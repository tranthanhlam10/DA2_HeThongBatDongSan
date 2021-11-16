import React from 'react'
import './SortedBy.css'
import { Link } from 'react-router-dom'
const sortItems = [
    {
        displayName: 'Mới nhất',
        link: '',
    },
    {
        displayName: 'Giá cao nhất',
        link: '',
    },
    {
        displayName: 'Giá thấp nhất',
        link: '',
    },
]
export default function SortedBy() {
    return (
        <div className="sort-control">
            <div className="filter-header">
                Sắp xếp theo
                <span className="material-icons">
                    expand_more
                </span>
                <ul className="sorted-list">

                    {
                        sortItems.map((item, index) => {
                            return (
                                <li className="sorted-item" key={index}>
                                    <Link to={item.link}>{item.displayName}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}
