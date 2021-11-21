import React from 'react'
import './ReCardInfo.css'
import heart1 from '../../assets/heart1.png'
import share1 from '../../assets/share1.png'
import bed from '../../assets/bed.png'
import bath from '../../assets/bath.png'
import area from '../../assets/area.png'
import {Link} from 'react-router-dom'
export default function ReCardInfo(props) {
    const { price, name, address, numofbed, numofbath, areainfo, img,link } = props;
    return (
        <div className="re-card-info-container">
            <Link to={link} className="re-card-info-link">
                <div className="re-card-img">
                    <img src={img}></img>
                </div>
                <div className="re-card-info">
                    <div className="re-card-title">
                        <p>{price}</p>
                        <div className="re-card-title-icon-container">
                            <div className="re-card-icon-heart">
                                <img src={heart1} />
                            </div>
                            <div className="re-card-icon-share">
                                <img src={share1} />
                            </div>
                        </div>
                    </div>
                    <p className="re-card-name">{name}</p>
                    <p className="re-card-address">{address}</p>
                    <div className="re-card-info-detail">
                        <ul className="re-card-info-list">
                            <li>
                                <span>{numofbed}</span>
                                <div className="mid-dot">
                                </div>
                                <img src={bed} />
                            </li>
                            <li>
                                <span>{numofbath}</span>
                                <div className="mid-dot">
                                </div>
                                <img src={bath} />
                            </li>
                            <li>
                                <span>{areainfo}</span>
                                <div className="mid-dot">
                                </div>
                                <img src={area} />
                            </li>
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    )
}
