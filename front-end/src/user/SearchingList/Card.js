import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { AddCart, DeleteCart } from "../../actions";
import { connect } from "react-redux";
function Card(props) {
    const [isClickWL, setIsClickWL] = useState(false);
    const [textAddCart, setTextAddCart] = useState('Lưu tin')

    const { image, name, time, price, area, location, link } = props;
    return (
        <div className="card-container">
            <div className="img-item">
                <Link to={link}>
                    <img src={image} alt="img-bds"></img>
                </Link>

                <button
                    id="favorite"
                    onClick={() => {
                        if (isClickWL) {
                            setIsClickWL(!isClickWL);
                            props.DeleteCart(name);
                            setTextAddCart('Lưu tin')

                        } else {
                            setIsClickWL(!isClickWL);
                            props.AddCart(name);
                            setTextAddCart('Xóa lưu')
                        }
                    }}
                >
                    <div className="favorite-content">
                        <span
                            className="favorite-name"
                            style={{ color: isClickWL ? "red" : "#fff" }}
                        >
                            {textAddCart}
                        </span>

                        <span
                            className="material-icons fovorite-icon"
                            style={{ color: isClickWL ? "red" : "#fff" }}
                        >
                            favorite
                        </span>
                    </div>
                </button>
            </div>
            <div className="content-item">
                {/* //tryền data tên vô đây */}
                <div className="card-title">
                    <Link to={link}>{name}</Link>
                </div>
                <div className="card-time">
                    <span className="material-icons">schedule</span>
                    {/* //tryền data thời gian vô đây */}
                    {time}
                </div>
                <div className="card-price">
                    <span className="material-icons">attach_money</span>
                    <span>GIÁ:</span>
                    {/* //tryền data giá vô đây */}
                    <span>{price}</span>
                </div>
                <div className="card-more-info">
                    <div className="card-area">
                        <span className="material-icons">home_work</span>
                        <span>DIỆN TÍCH:</span>
                        {/* //tryền data diện tích vô đây */}
                        <span>{area}</span>
                        <span>M2</span>
                    </div>
                    <div className="card-location">
                        <span className="material-icons">location_on</span>
                        <span>QUẬN/HUYỆN:</span>
                        {/* //tryền data location vô đây */}
                        <span>{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        _products: state._todoProduct,
    };
};
function mapDispatchToProps(dispatch) {
    return {
        DeleteCart: item => dispatch(DeleteCart(item)),
        AddCart: item => dispatch(AddCart(item)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
