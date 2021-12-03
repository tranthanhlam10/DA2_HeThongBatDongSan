import React from 'react'
import './FooterMiddle.css'
import { Link } from 'react-router-dom'
const colList = [
    {
        title: 'Nhà đất TP HCM',
        items: [
            {
                name: 'Bán nhà quận 1',
            },
            {
                name: 'Bán nhà quận 2',
            },
            {
                name: 'Bán nhà quận 3',
            },
            {
                name: 'Bán nhà quận 4',
            },
            {
                name: 'Bán nhà quận 6',
            },
            {
                name: 'Bán nhà quận 7',
            },
            {
                name: 'Bán nhà quận 8',
            },
            {
                name: 'Bán nhà quận 9',
            },
            {
                name: 'Bán nhà quận 10',
            },
            {
                name: 'Bán nhà quận 11',
            },
            {
                name: 'Bán nhà quận 12',
            },
            {
                name: 'Bán nhà quận Tân Phú',
            },
            {
                name: 'Bán nhà quận Thủ Đức',
            },
            {
                name: 'Bán nhà quận Bình Chánh',
            },
            {
                name: 'Bán nhà quận Bình Tân',
            },
            {
                name: 'Chung cư Thủ Đức',
            },
            {
                name: 'Chung cư quận 9',
            },
            {
                name: 'Biệt thự Gò Vấp',
            },

        ]
    },
    {
        title: 'Nhà đất Hà Nội',
        items: [
            {
                name: 'Bán nhà Hà Nội',
            },
            {
                name: 'Bán nhà chính chủ Hà Nội',
            },
            {
                name: 'Chung cư Băc Từ Liêm',
            },
            {
                name: 'Nhà đất Long Biên',
            },
            {
                name: 'Nhà đất Hà Đông',
            },
            {
                name: 'Thuê chung cư Hà Nội',
            },
            {
                name: 'Bán nhà Bắc Từ Liêm',
            },
            {
                name: 'Thuê nhà Hà Nội',
            },
            {
                name: 'Thuê nhà Thanh Xuân',
            },
            {
                name: 'Chung cư Hà Đông',
            },
            {
                name: 'Nhà đất Đông Anh',
            },
            {
                name: 'Terra An Hưng',
            },
            {
                name: 'Thuê phòng trọ Hà Nội',
            },
            {
                name: 'The Matrix One',
            },
            {
                name: 'Vinhomes Ocean Park',
            },
            {
                name: 'Vinhomes Smart City',
            },
            {
                name: 'Mipec Rubik 360',
            },
            {
                name: 'Nhà Phố Gò Vấp',
            },
        ]
    },
    {
        title: 'Mua bán nhà đất',
        items: [
            {
                name: 'Bán nhà Hà Nội',
            },
            {
                name: 'Bán nhà chính chủ Hà Nội',
            },
            {
                name: 'Chung cư Băc Từ Liêm',
            },
            {
                name: 'Nhà đất Long Biên',
            },
            {
                name: 'Nhà đất Hà Đông',
            },
            {
                name: 'Thuê chung cư Hà Nội',
            },
            {
                name: 'Bán nhà Bắc Từ Liêm',
            },
            {
                name: 'Thuê nhà Hà Nội',
            },
            {
                name: 'Thuê nhà Thanh Xuân',
            },
            {
                name: 'Chung cư Hà Đông',
            },
            {
                name: 'Nhà đất Đông Anh',
            },
            {
                name: 'Terra An Hưng',
            },
            {
                name: 'Thuê phòng trọ Hà Nội',
            },
            {
                name: 'The Matrix One',
            },
            {
                name: 'Vinhomes Ocean Park',
            },
            {
                name: 'Vinhomes Smart City',
            },
            {
                name: 'Mipec Rubik 360',
            },
            {
                name: 'Nhà Phố Gò Vấp',
            },
        ]
    },
    {
        title: 'Nhà đất cho thuê',
        items: [
            {
                name: 'Bán nhà Hà Nội',
            },
            {
                name: 'Bán nhà chính chủ Hà Nội',
            },
            {
                name: 'Chung cư Băc Từ Liêm',
            },
            {
                name: 'Nhà đất Long Biên',
            },
            {
                name: 'Nhà đất Hà Đông',
            },
            {
                name: 'Thuê chung cư Hà Nội',
            },
            {
                name: 'Bán nhà Bắc Từ Liêm',
            },
            {
                name: 'Thuê nhà Hà Nội',
            },
            {
                name: 'Thuê nhà Thanh Xuân',
            },
            {
                name: 'Chung cư Hà Đông',
            },
            {
                name: 'Nhà đất Đông Anh',
            },
            {
                name: 'Terra An Hưng',
            },
            {
                name: 'Thuê phòng trọ Hà Nội',
            },
            {
                name: 'The Matrix One',
            },
            {
                name: 'Vinhomes Ocean Park',
            },
            {
                name: 'Vinhomes Smart City',
            },
            {
                name: 'Mipec Rubik 360',
            },
            {
                name: 'Nhà Phố Gò Vấp',
            },
        ]
    }
]
export default function FooterMiddle() {
    return (
        <div className="footer-middle-container">
            <div className="footer-middle-center">
                {
                    colList.map((item, index) => {
                        return (
                            <div className="fm-col">
                                <div className="fm-col-title">
                                    <a href="#">
                                        {item.title}
                                    </a>
                                </div>
                                <ul className="fm-col-list">
                                    {
                                        item.items.map((item, index) => {
                                            return (
                                                <li>
                                                    <a href="/searchinglist">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
