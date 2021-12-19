import React, { useState } from 'react'
import './ReCardInfo.css'
import heart1 from '../../assets/heart1.png'
import share1 from '../../assets/share1.png'
import bed from '../../assets/bed.png'
import bath from '../../assets/bath.png'
import area from '../../assets/area.png'
import { Link } from 'react-router-dom'
import filled_heart from "../../assets/filled_heart.png"
import { AddCart, DeleteCart } from "../../actions";
import { connect } from "react-redux";
function ReCardInfo(props) {
    const { price, name, address, numofbed, numofbath, areainfo, img, link } = props;
    const [isClick, setIsClick] = useState(false)
    const hanldeClickIconHeart = () => {
        if (isClick) {
            props.DeleteCart(name);

        } else {

            props.AddCart(name);
        }

        setIsClick(prevState => !prevState)
    }
    return (
        <div className="re-card-info-container">
            <div className="re-card-info-link">
                <a href="realestate">
                    <div className="re-card-img">
                        <img src={img}></img>
                    </div>
                </a>
                <div className="re-card-info">
                    <div className="re-card-title">
                        <p>{price}</p>
                        <div className="re-card-title-icon-container">
                            <div className="re-card-icon-heart" onClick={hanldeClickIconHeart}>
                                <img src={isClick ? filled_heart : heart1} />
                            </div>

                        </div>
                    </div>
                    <a href="realestate" className="re-card-name">{name}</a>
                    <p className="re-card-address">{address}</p>
                    <div className="re-card-info-detail">
                        <ul className="re-card-info-list">
                            <li>
                                <span>{numofbed}</span>

                                <img src={bed} />
                            </li>
                            <li>
                                <span>{numofbath}</span>

                                <img src={bath} />
                            </li>
                            <li>
                                <span>{areainfo}</span>

                                <img src={area} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(ReCardInfo); 