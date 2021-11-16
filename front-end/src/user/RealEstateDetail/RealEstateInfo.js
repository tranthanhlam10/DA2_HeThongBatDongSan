import React from 'react'
import './RealEstateInfo.css'
import share from '../../assets/share.png'
import heart from '../../assets/heart.png'
export default function RealEstateInfo() {
    return (
        <div className="re-info-container">
            <div className="re-info-box">
                <div className="re-detail-container">
                    <div className="re-detail-name-des">
                        <p className="re-detail-title-box">Tên bất động sản</p>
                        <p className="re-detail-des">Mô tả ngắn</p>
                    </div>
                    <ul className="re-detail-list re-detail-col-first">
                        <li>
                            <p className="re-detail-title">
                                Mức giá
                            </p>
                            <p>35 tỷ - 30 triệu/m2</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Diện tích
                            </p>
                            <p>104 m2</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Phòng ngủ
                            </p>
                            <p>3 phòng</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Phòng toilet
                            </p>
                            <p>2 phòng</p>
                        </li>
                        <li className="share-or-save share-icon">
                            <button>
                                <img src={share} className="re-detail-icon" />
                                <p>Chia sẻ</p>
                            </button>

                        </li>
                        <li className="share-or-save save-icon">
                            <button>
                                <img src={heart} className="re-detail-icon" />
                                <p>Yêu thích</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="re-info-box">
                <div className="re-detail-container">
                    <ul className="re-detail-list re-detail-col-second">
                        <li>
                            <p className="re-detail-title">
                                Ngày đăng
                            </p>
                            <p>21/10/2021</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Ngày hết hạn
                            </p>
                            <p>21/11/2021</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Loại tin
                            </p>
                            <p>Tin thường</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Mã tin
                            </p>
                            <p>77777</p>
                        </li>
                        <li className="share-or-save save-icon">
                            <button>
                                <img src={heart} className="re-detail-icon" />
                                <p>Yêu thích</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="re-info-box">
                <div className="re-detail-container">
                    <div className="re-detail-title-box">
                        <p>Thông tin mô tả</p>

                    </div>
                    <p className="re-detail-des">Mô tả</p>
                    <div className="re-view-more">
                        <div className="re-view-more-content">
                            <span>Xem thêm</span>
                            <span class="material-icons">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="re-info-box">
                <div className="re-detail-container">
                    <div className="re-detail-title-box">
                        <p>Đặc điểm bất động sản</p>
                    </div>
                    <ul className="re-detail-row">
                        <li>
                            <p className="re-detail-row-title">
                                Loại tin đăng:
                            </p>
                            <p>Bán nhà</p>
                        </li>
                        <li>
                            <p className="re-detail-row-title">
                                Địa chỉ:
                            </p>
                            <p>Biên Hòa, Đồng Nai</p>
                        </li>
                        <li className="re-detail-room">
                            <div className="re-detail-bedroom">
                                <p className="re-detail-row-title">
                                    Số phòng ngủ:
                                </p>
                                <p>3</p>
                            </div>
                            <div>
                                <p className="re-detail-row-title">
                                    Số phòng tắm/toilet:
                                </p>
                                <p>30</p>
                            </div>
                        </li>
                        <li>
                            <p className="re-detail-row-title">
                                Nội thất:
                            </p>
                            <p>Bàn ghế</p>
                        </li>
                        <li>
                            <p className="re-detail-row-title">
                                Pháp lý:
                            </p>
                            <p>abcxyz</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="re-info-box">
                <div className="re-detail-container">
                    <div className="re-detail-title-box">
                        <p>Thông tin dự án</p>
                    </div>
                    <ul className="re-detail-row">
                        <li>
                            <p className="re-detail-row-title">
                                Tên dự án:
                            </p>
                            <p>Nhà abcxyz</p>
                        </li>
                        <li>
                            <p className="re-detail-row-title">
                                Chủ đầu tư:
                            </p>
                            <p>Biên Hòa, Đồng Nai</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div >
    )
}
