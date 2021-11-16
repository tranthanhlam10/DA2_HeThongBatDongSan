import React from 'react'
import './InfoBox.css'
export default function InfoBox() {
    return (
        <div className="info-box-container">
            <div className="info-box">
                <img src="https://vcdn1-dulich.vnecdn.net/2021/07/16/8-1626444967.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=GfgGn4dNuKZexy1BGkAUNA" className="owner-avatar" />
                <p className="owner-name">
                    Lương Duy Bảo
                </p>
                <div className="owner-phone">
                    088 8888 888
                </div>
                <div className="owner-email">
                    <a href="#">
                        Gửi email
                    </a>
                </div>

                <div className="owner-address">
                    Yêu cầu liên hệ lại
                </div>
            </div>
        </div >
    )
}
