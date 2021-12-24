
import './ReCarousel.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function DetailCarousel() {
    return (
        <Carousel>
            <div>
                <img src="https://nhatro123.com/pictures/picfullsizes/2021/07/23/bkcucs1627011565.jpg" />
            </div>
            <div>
                <img src="https://duanromanplaza.vn/phong-tro-thu-duc-cho-tot/imager_1_18329_700.jpg" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCv0d1h6TIj_jPJF1VfFB1Y2MLedf8d1gJw&usqp=CAU" />
            </div>
            <div>
                <img src="https://nhatro123.com/pictures/picfullsizes/2021/11/01/fuyazr1635765963.jpg" />
            </div>
        </Carousel>
    )
}
