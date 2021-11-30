import React, { useState, useEffect } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
export default function Card(props) {
    const [colorAddWL, setColorAddWL] = useState('#fff')
    const [isClickWL, setIsClickWL] = useState(false)
    const handleClickAddWishList = () => {
        setIsClickWL(!isClickWL)
    }
    useEffect(() => {
        isClickWL ? setColorAddWL('red') : setColorAddWL('#fff')
    }, [isClickWL])
    const { image, name, time, price, area, location, link } = props;
    return (
        <div className="card-container">
            <div className="img-item">
                <Link to={link}>
                    <img src={image}></img>
                </Link>
                <button id="favorite" onClick={handleClickAddWishList}>
                    <div className="favorite-content">
                        <span className="favorite-name" style={{ color: colorAddWL }}>
                            Lưu tin
                        </span>
                        <span className="material-icons fovorite-icon" style={{ color: colorAddWL }}>
                            favorite
                        </span>
                    </div>

                </button>
            </div>
            <div className="content-item">
                {/* //tryền data tên vô đây */}
                <div className="card-title">
                    <Link to={link}>
                        {name}
                    </Link>
                </div>
                <div className="card-time">
                    <span className="material-icons">
                        schedule
                    </span>
                    {/* //tryền data thời gian vô đây */}
                    {time}
                </div>
                <div className="card-price">
                    <span className="material-icons">
                        attach_money
                    </span>
                    <span>
                        GIÁ:
                    </span>
                    {/* //tryền data giá vô đây */}
                    <span>
                        {price}
                    </span>
                </div>
                <div className="card-more-info">
                    <div className="card-area">
                        <span className="material-icons">
                            home_work
                        </span>
                        <span>
                            DIỆN TÍCH:
                        </span>
                        {/* //tryền data diện tích vô đây */}
                        <span>
                            {area}
                        </span>
                        <span>M2</span>
                    </div>
                    <div className="card-location">
                        <span className="material-icons">
                            location_on
                        </span>
                        <span>
                            QUẬN/HUYỆN:
                        </span>
                        {/* //tryền data location vô đây */}
                        <span>
                            {location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
