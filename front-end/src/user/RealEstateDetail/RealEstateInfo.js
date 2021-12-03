import React, { useState } from 'react'
import './RealEstateInfo.css'
import share from '../../assets/share.png'
import heart from '../../assets/heart.png'

export default function RealEstateInfo() {
    const text = "Mô tả chung cư Watermark, quận Cầu Giấy, nằm ngay trên mặt đường Lạc Long Quân, bên cạnh quần thể khu đô thị Tây Hồ. Cách trung tâm Hà Nội khoảng 7 km, tiếp giáp với khu đô thị Ciputra và khu đô thị mới Tây Hồ Tây. Đây là tòa căn hộ duy nhất đang được bán quanh khu vực Tây Hồ Tây. Watermark sở hữu không gian sống trong lành, thoáng mát, view đẹp bên cạnh hồ. Với những lợi thế vốn có về địa lý khu đất Watermark còn đảm bảo đầy đủ về mặt tiện ích và dịch vụ như: Việc thông xe cầu Nhật Tân giúp cho giao thông thuận tiện. Với nhiều tiện ích cao cấp tại khu vực xung quanh như: Khu tập gym và hồ bơi dành riêng cho cư dân Watermark, khu nhà hàng sang trọng, cafe và siêu thị, ….. Trường học Quốc tế, khu vui chơi giải trí công viên nước Hồ Tây, thung lũng hoa Hồ Tây, …."
    const [isTruncated, setIsTruncated] = useState(true)
    const [textSeeMore, setTextSeeMore] = useState('Xem thêm')
    const [icon, setIcon] = useState(<span className="material-icons">
        expand_more
    </span>)

    const trunctedText = isTruncated ? `${text.slice(0, 150)}...` : text

    const handleClickSeeMore = () => {
        const initState = isTruncated
        setIsTruncated(!initState)

        if (textSeeMore == 'Xem thêm') {
            setTextSeeMore('Rút gọn')
            setIcon(<span className="material-icons">
                expand_less
            </span>)
        } else {
            setTextSeeMore('Xem thêm')
            setIcon(<span className="material-icons">
                expand_more
            </span>)
        }
    }
    return (
        <div className="re-info-container">
            <div className="re-info-box">
                <div className="re-detail-container">
                    <div className="re-detail-name-des">
                        <p className="re-detail-title-box">Tên bất động sản</p>
                        <p className="re-detail-des">Đây là căn hộ chung cư tại Hà Nội</p>
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
                    <p className="re-detail-des">{trunctedText}</p>
                    <div className="re-view-more">
                        <div className="re-view-more-content">
                            <span onClick={handleClickSeeMore}>{textSeeMore}</span>
                            {icon}
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
                            <p>Bán chung cư</p>
                        </li>
                        <li>
                            <p className="re-detail-row-title">
                                Địa chỉ:
                            </p>
                            <p>Cầu Giấy, Hà Nội</p>
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
                            <p>Hợp pháp</p>
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
                            <p>Chung cư Jewelry</p>
                        </li>
                        <li>
                            <p className="re-detail-row-title">
                                Chủ đầu tư:
                            </p>
                            <p>Team 4</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div >
    )
}
