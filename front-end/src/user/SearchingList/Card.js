import React from 'react'
import './Card.css'

export default function Card(props) {
    const { image, name, time, price, area, location } = props;
    return (
        <div className="card-container">
            <div className="img-item">
                <a href="#">
                    <img src={image}></img>
                </a>
                <button id="favorite">
                    <div className="favorite-content">
                        <span className="favorite-name">
                            Lưu tin
                        </span>
                        <span className="material-icons fovorite-icon">
                            favorite
                        </span>
                    </div>

                </button>
            </div>
            <div className="content-item">
                {/* //tryền data tên vô đây */}
                <div className="card-title">
                    <a href="#">
                        {name}
                    </a>
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
