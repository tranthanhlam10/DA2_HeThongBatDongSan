
import './ReCarousel.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function DetailCarousel() {
    return (
        <Carousel>
            <div>
                <img src="https://news.meeycdn.com/uploads/2020/10/1-chung-cu-cao-cap-gia-bao-nhieu.jpg" />
            </div>
            <div>
                <img src="https://vesinhviethouse.com/wp-content/uploads/2021/04/ve-sinh-can-ho.jpg" />
            </div>
            <div>
                <img src="https://nhadatnhanh.vn/upload/news/phan-loai-can-ho-chung-cu.jpg" />
            </div>
            <div>
                <img src="https://cafefcdn.com/zoom/700_438/2020/2/26/bds123-mua-ban-can-ho-chung-cu1571218457-15826921471071088965807-crop-15826921545642145401569.jpg" />
            </div>
        </Carousel>
    )
}
