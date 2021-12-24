import React, { useState, useEffect } from 'react'
import './RealEstateInfo.css'
import { AddCart, DeleteCart } from "../../actions";
import { connect } from "react-redux";

function RealEstateInfo(props) {
    const text = "Phù hợp với các bạn Sinh Viên, Người đi làm gần khu công nghệ cao, Quận 9 Tiện ích + gần chợ + ngân hàng + cây xăng Chính sách dịch vụ: * Điện : 3k/ ký * Nước : 20k/ khối * phí quản lý + rác + Wifi : FREE, 1PN riêng sẵn máy lạnh 15m2, gác lửng 2m không đụng đầu, Kệ bếp, tủ bếp rộng, toilet riêng, , Sân vườn mát mẻ, khu vực an ninh, gần chợ, không ngập úng, thuận tiện di chuyển CNC, Samsung , FPT, Nguyễn Duy Trinh "
    const [isTruncated, setIsTruncated] = useState(true)
    const [textSeeMore, setTextSeeMore] = useState('Xem thêm')
    const [icon, setIcon] = useState(<span className="material-icons">
        expand_more
    </span>)

    const [color, setColor] = useState("#000")
    const [background, setBackground] = useState("#fff")
    const [isClick, setIsClick] = useState(false)
    const [isClickShare, setIsClickShare] = useState(false)
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

    const handleClickLike = (e) => {
        e.preventDefault()

        if (isClick) {
            props.DeleteCart('abc');

        } else {

            props.AddCart('abc');
        }
        setIsClick(prevState => !prevState)
    }
    const handleClickShare = (e) => {
        e.preventDefault()
        setIsClickShare(prevState => !prevState)
    }
    useEffect(() => {
        if (props.numberCart !== 0) {
            setIsClick(true)
        }
    }, [])
    return (
        <div className="re-info-container">
            <div className="re-info-box">
                <div className="re-detail-container">
                    <div className="re-detail-name-des">
                        <p className="re-detail-title-box">Cho thuê nhà trọ đường Liên Phường, Quận 9</p>
                        <p className="re-detail-des">Đây là phòng trọ quận 9</p>
                    </div>
                    <ul className="re-detail-list re-detail-col-first">
                        <li>
                            <p className="re-detail-title">
                                Mức giá
                            </p>
                            <p>9 triệu/tháng</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Diện tích
                            </p>
                            <p>50 m2</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Phòng ngủ
                            </p>
                            <p>2 phòng</p>
                        </li>
                        <li>
                            <p className="re-detail-title">
                                Phòng toilet
                            </p>
                            <p>1 phòng</p>
                        </li>
                        <li className="share-or-save share-icon">
                            <button onClick={handleClickShare} style={isClickShare ? { color: "#fff", background: "#0572e6" } : { color: "#000", background: "#fff" }}>
                                <span class="material-icons re-detail-icon">
                                    share
                                </span>
                                <p>Chia sẻ</p>
                            </button>
                        </li>
                        <li className="share-or-save save-icon">
                            <button onClick={handleClickLike} style={isClick ? { color: "#fff", background: "red" } : { color: "#000", background: "#fff" }}>
                                <span class="material-icons re-detail-icon">
                                    favorite_border
                                </span>

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
                            <p>Cho thuê nhà trọ</p>
                        </li>
                        <li>
                            <p className="re-detail-row-title">
                                Địa chỉ:
                            </p>
                            <p>Quận 9, thành phố Hồ Chí Minh</p>
                        </li>
                        <li className="re-detail-room">
                            <div className="re-detail-bedroom">
                                <p className="re-detail-row-title">
                                    Số phòng ngủ:
                                </p>
                                <p>2</p>
                            </div>
                            <div>
                                <p className="re-detail-row-title">
                                    Số phòng tắm/toilet:
                                </p>
                                <p>1</p>
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
                            <p>Cho thuê nhà trọ quận 9</p>
                        </li>
                        <li>
                            <p className="re-detail-row-title">
                                Chủ đầu tư:
                            </p>
                            <p>Trần Thanh Lâm</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div >
    )
}

const mapStateToProps = state => {
    return {
        _products: state._todoProduct,
        numberCart: state._todoProduct.numberCart,
    };
};
function mapDispatchToProps(dispatch) {
    return {
        DeleteCart: item => dispatch(DeleteCart(item)),
        AddCart: item => dispatch(AddCart(item)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(RealEstateInfo);
