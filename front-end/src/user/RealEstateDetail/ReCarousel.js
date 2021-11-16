
import './ReCarousel.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function DetailCarousel() {
    return (
        <Carousel>
            <div>
                <img src="https://cdn.houseviet.vn/images/post/28102021/132799109690254161-840x535.jpg" />
            </div>
            <div>
                <img src="https://cdn.houseviet.vn/images/post/28102021/132799109692305775-840x535.jpg" />
            </div>
            <div>
                <img src="https://cdn.houseviet.vn/images/post/28102021/132799109694275748-840x535.jpg" />
            </div>
            <div>
                <img src="https://cdn.houseviet.vn/images/post/28102021/132799109696267844-840x535.jpg" />
            </div>
        </Carousel>
    )
}
