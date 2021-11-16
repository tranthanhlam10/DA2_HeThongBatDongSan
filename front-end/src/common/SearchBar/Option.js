import React, { useState } from 'react'
import './Option.css'

export default function Option(props) {
    const [displayName, setDisplayName] = useState('Tất cả');
    const { title, optionItems, isArrowRight = false } = props;

    return (
        <div className="option-container">

            <div className="option-label">
                <p>{title}</p>
                <span className="material-icons">
                    expand_more
                </span>
            </div>
            <div className="option-section">{displayName}</div>
            <div className="option-list-container">
                <ul className="option-list">
                    {
                        optionItems.map((item, index) => {
                            return (
                                <li onClick={() => setDisplayName(item.itemName)} className="option-item">
                                    <div className="option-item-name">{item.itemName}</div>
                                    {
                                        isArrowRight && <span className="material-icons icon-arrow-right">
                                            navigate_next
                                        </span>
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div >
    )
}
